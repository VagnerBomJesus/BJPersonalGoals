CREATE TABLE IF NOT EXISTS "goal_completion" (
	"id" text PRIMARY KEY NOT NULL,
	"goals_id" text NOT NULL,
	"completed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goal_completion" ADD CONSTRAINT "goal_completion_goals_id_goals_id_fk" FOREIGN KEY ("goals_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
