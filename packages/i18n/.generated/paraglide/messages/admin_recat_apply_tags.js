/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Apply_TagsInputs */

const en_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Also add the chosen tags (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Also add the chosen tags (${count__number} mods)`)
	
};

const es_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Añadir también las etiquetas elegidas (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Añadir también las etiquetas elegidas (${count__number} mods)`)
	
};

const de_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Auch die gewählten Tags hinzufügen (${count__number} Mod)`);
	return /** @type {LocalizedString} */ (`Auch die gewählten Tags hinzufügen (${count__number} Mods)`)
	
};

const fr_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ajouter aussi les tags choisis (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Ajouter aussi les tags choisis (${count__number} mods)`)
	
};

const it_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Aggiungi anche i tag scelti (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Aggiungi anche i tag scelti (${count__number} mod)`)
	
};

const nl_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ook de gekozen tags toevoegen (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Ook de gekozen tags toevoegen (${count__number} mods)`)
	
};

const pl_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Dodaj też wybrane tagi (${count__number} mod)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Dodaj też wybrane tagi (${count__number} mody)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Dodaj też wybrane tagi (${count__number} modów)`);
	return /** @type {LocalizedString} */ (`Dodaj też wybrane tagi (${count__number} modu)`)
	
};

const pt_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Adicionar também as tags escolhidas (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Adicionar também as tags escolhidas (${count__number} mods)`)
	
};

const ru_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Также добавить выбранные теги (${count__number} мод)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Также добавить выбранные теги (${count__number} мода)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Также добавить выбранные теги (${count__number} модов)`);
	return /** @type {LocalizedString} */ (`Также добавить выбранные теги (${count__number} мода)`)
	
};

const sv_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lägg även till de valda taggarna (${count__number} modd)`);
	return /** @type {LocalizedString} */ (`Lägg även till de valda taggarna (${count__number} moddar)`)
	
};

const tr_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Seçilen etiketleri de ekle (${count__number} mod)`);
	return /** @type {LocalizedString} */ (`Seçilen etiketleri de ekle (${count__number} mod)`)
	
};

const zh_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`同时添加所选标签（${count__number} 个模组）`)
};

const ja_admin_recat_apply_tags = /** @type {(inputs: Admin_Recat_Apply_TagsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`選んだタグも追加する（${count__number} 件の MOD）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Also add the chosen tags ({count__number} mod)" |
* | * | "Also add the chosen tags ({count__number} mods)" |
*
* @param {Admin_Recat_Apply_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_apply_tags = /** @type {((inputs: Admin_Recat_Apply_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_apply_tags(inputs)
	if (locale === "de") return de_admin_recat_apply_tags(inputs)
	if (locale === "fr") return fr_admin_recat_apply_tags(inputs)
	if (locale === "it") return it_admin_recat_apply_tags(inputs)
	if (locale === "nl") return nl_admin_recat_apply_tags(inputs)
	if (locale === "pl") return pl_admin_recat_apply_tags(inputs)
	if (locale === "pt") return pt_admin_recat_apply_tags(inputs)
	if (locale === "ru") return ru_admin_recat_apply_tags(inputs)
	if (locale === "sv") return sv_admin_recat_apply_tags(inputs)
	if (locale === "tr") return tr_admin_recat_apply_tags(inputs)
	if (locale === "zh") return zh_admin_recat_apply_tags(inputs)
	if (locale === "ja") return ja_admin_recat_apply_tags(inputs)
	return en_admin_recat_apply_tags(inputs)
});
