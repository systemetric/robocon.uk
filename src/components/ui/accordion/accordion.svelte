	
<script lang="ts">
	import { Accordion } from "bits-ui";
</script>
 
<Accordion.Root type="single">
	<Accordion.Item value="item-1">
		<Accordion.Header>
			<Accordion.Trigger>Item 1 Title</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>This is the collapsible content for this section.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Header>
			<Accordion.Trigger>Item 2 Title</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>This is the collapsible content for this section.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>