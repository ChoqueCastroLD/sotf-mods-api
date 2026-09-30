/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Applied_Tags_SkippedInputs */

const en_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod kept its tags (not public or already full).`);
	return /** @type {LocalizedString} */ (`${count__number} mods kept their tags (not public or already full).`)
	
};

const es_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod conservó sus etiquetas (no es público o ya tiene 5).`);
	return /** @type {LocalizedString} */ (`${count__number} mods conservaron sus etiquetas (no son públicos o ya tienen 5).`)
	
};

const de_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod hat seine Tags behalten (nicht öffentlich oder schon voll).`);
	return /** @type {LocalizedString} */ (`${count__number} Mods haben ihre Tags behalten (nicht öffentlich oder schon voll).`)
	
};

const fr_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod a gardé ses tags (non public ou déjà complet).`);
	return /** @type {LocalizedString} */ (`${count__number} mods ont gardé leurs tags (non publics ou déjà complets).`)
	
};

const it_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod ha mantenuto i suoi tag (non pubblica o già piena).`);
	return /** @type {LocalizedString} */ (`${count__number} mod hanno mantenuto i loro tag (non pubbliche o già piene).`)
	
};

const nl_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod hield zijn tags (niet openbaar of al vol).`);
	return /** @type {LocalizedString} */ (`${count__number} mods hielden hun tags (niet openbaar of al vol).`)
	
};

const pl_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod zachował swoje tagi (niepubliczny lub już pełny).`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody zachowały swoje tagi (niepubliczne lub już pełne).`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów zachowało swoje tagi (niepubliczne lub już pełne).`);
	return /** @type {LocalizedString} */ (`${count__number} modu zachowało swoje tagi (niepubliczne lub już pełne).`)
	
};

const pt_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod manteve as tags (não público ou já cheio).`);
	return /** @type {LocalizedString} */ (`${count__number} mods mantiveram as tags (não públicos ou já cheios).`)
	
};

const ru_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод сохранил свои теги (не опубликован или уже заполнен).`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода сохранили свои теги (не опубликованы или уже заполнены).`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов сохранили свои теги (не опубликованы или уже заполнены).`);
	return /** @type {LocalizedString} */ (`${count__number} мода сохранили свои теги (не опубликованы или уже заполнены).`)
	
};

const sv_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd behöll sina taggar (inte offentlig eller redan full).`);
	return /** @type {LocalizedString} */ (`${count__number} moddar behöll sina taggar (inte offentliga eller redan fulla).`)
	
};

const tr_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod etiketlerini korudu (herkese açık değil ya da zaten dolu).`);
	return /** @type {LocalizedString} */ (`${count__number} mod etiketlerini korudu (herkese açık değil ya da zaten dolu).`)
	
};

const zh_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组保留了原有标签（未公开或已满）。`)
};

const ja_admin_recat_applied_tags_skipped = /** @type {(inputs: Admin_Recat_Applied_Tags_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の MOD はタグを維持しました（非公開、またはすでに上限）。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod kept its tags (not public or already full)." |
* | * | "{count__number} mods kept their tags (not public or already full)." |
*
* @param {Admin_Recat_Applied_Tags_SkippedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_applied_tags_skipped = /** @type {((inputs: Admin_Recat_Applied_Tags_SkippedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Applied_Tags_SkippedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_applied_tags_skipped(inputs)
	if (locale === "de") return de_admin_recat_applied_tags_skipped(inputs)
	if (locale === "fr") return fr_admin_recat_applied_tags_skipped(inputs)
	if (locale === "it") return it_admin_recat_applied_tags_skipped(inputs)
	if (locale === "nl") return nl_admin_recat_applied_tags_skipped(inputs)
	if (locale === "pl") return pl_admin_recat_applied_tags_skipped(inputs)
	if (locale === "pt") return pt_admin_recat_applied_tags_skipped(inputs)
	if (locale === "ru") return ru_admin_recat_applied_tags_skipped(inputs)
	if (locale === "sv") return sv_admin_recat_applied_tags_skipped(inputs)
	if (locale === "tr") return tr_admin_recat_applied_tags_skipped(inputs)
	if (locale === "zh") return zh_admin_recat_applied_tags_skipped(inputs)
	if (locale === "ja") return ja_admin_recat_applied_tags_skipped(inputs)
	return en_admin_recat_applied_tags_skipped(inputs)
});
