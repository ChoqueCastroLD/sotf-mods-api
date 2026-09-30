/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Applied_UnchangedInputs */

const en_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} was already right.`);
	return /** @type {LocalizedString} */ (`${count__number} were already right.`)
	
};

const es_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ya estaba bien.`);
	return /** @type {LocalizedString} */ (`${count__number} ya estaban bien.`)
	
};

const de_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} war schon richtig.`);
	return /** @type {LocalizedString} */ (`${count__number} waren schon richtig.`)
	
};

const fr_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} était déjà correct.`);
	return /** @type {LocalizedString} */ (`${count__number} étaient déjà corrects.`)
	
};

const it_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} era già a posto.`);
	return /** @type {LocalizedString} */ (`${count__number} erano già a posto.`)
	
};

const nl_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} stond al goed.`);
	return /** @type {LocalizedString} */ (`${count__number} stonden al goed.`)
	
};

const pl_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} był już poprawny.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} były już poprawne.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} było już poprawnych.`);
	return /** @type {LocalizedString} */ (`${count__number} było już poprawne.`)
	
};

const pt_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} já estava certo.`);
	return /** @type {LocalizedString} */ (`${count__number} já estavam certos.`)
	
};

const ru_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} уже был на месте.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} уже были на месте.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} уже были на месте.`);
	return /** @type {LocalizedString} */ (`${count__number} уже были на месте.`)
	
};

const sv_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} var redan rätt.`);
	return /** @type {LocalizedString} */ (`${count__number} var redan rätt.`)
	
};

const tr_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tanesi zaten doğruydu.`);
	return /** @type {LocalizedString} */ (`${count__number} tanesi zaten doğruydu.`)
	
};

const zh_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个原本就正确。`)
};

const ja_admin_recat_applied_unchanged = /** @type {(inputs: Admin_Recat_Applied_UnchangedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件はすでに正しい状態でした。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} was already right." |
* | * | "{count__number} were already right." |
*
* @param {Admin_Recat_Applied_UnchangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_applied_unchanged = /** @type {((inputs: Admin_Recat_Applied_UnchangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Applied_UnchangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_applied_unchanged(inputs)
	if (locale === "de") return de_admin_recat_applied_unchanged(inputs)
	if (locale === "fr") return fr_admin_recat_applied_unchanged(inputs)
	if (locale === "it") return it_admin_recat_applied_unchanged(inputs)
	if (locale === "nl") return nl_admin_recat_applied_unchanged(inputs)
	if (locale === "pl") return pl_admin_recat_applied_unchanged(inputs)
	if (locale === "pt") return pt_admin_recat_applied_unchanged(inputs)
	if (locale === "ru") return ru_admin_recat_applied_unchanged(inputs)
	if (locale === "sv") return sv_admin_recat_applied_unchanged(inputs)
	if (locale === "tr") return tr_admin_recat_applied_unchanged(inputs)
	if (locale === "zh") return zh_admin_recat_applied_unchanged(inputs)
	if (locale === "ja") return ja_admin_recat_applied_unchanged(inputs)
	return en_admin_recat_applied_unchanged(inputs)
});
