import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Notification Service exposes project metadata", () => {
  assert.equal(project.slug, "notification-service");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
