/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Versions_All_CountInputs */

const en_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`All ${count__number} version`);
	return /** @type {LocalizedString} */ (`All ${count__number} versions`)
	
};

const es_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} versión`);
	return /** @type {LocalizedString} */ (`Las ${count__number} versiones`)
	
};

const de_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Die ${count__number} Version`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Versionen`)
	
};

const fr_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} version`);
	return /** @type {LocalizedString} */ (`Les ${count__number} versions`)
	
};

const it_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} versione`);
	return /** @type {LocalizedString} */ (`Tutte le ${count__number} versioni`)
	
};

const nl_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`De ${count__number} versie`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} versies`)
	
};

const pl_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wersja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wszystkie ${count__number} wersje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wszystkie ${count__number} wersji`);
	return /** @type {LocalizedString} */ (`Wszystkie ${count__number} wersji`)
	
};

const pt_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`A ${count__number} versão`);
	return /** @type {LocalizedString} */ (`Todas as ${count__number} versões`)
	
};

const ru_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} версия`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Все ${count__number} версии`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Все ${count__number} версий`);
	return /** @type {LocalizedString} */ (`Все ${count__number} версии`)
	
};

const sv_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Den ${count__number} versionen`);
	return /** @type {LocalizedString} */ (`Alla ${count__number} versioner`)
	
};

const tr_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sürüm`);
	return /** @type {LocalizedString} */ (`Tüm ${count__number} sürüm`)
	
};

const zh_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`全部 ${count__number} 个版本`)
};

const ja_mod_versions_all_count = /** @type {(inputs: Mod_Versions_All_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`全 ${count__number} バージョン`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "All {count__number} version" |
* | * | "All {count__number} versions" |
*
* @param {Mod_Versions_All_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_all_count = /** @type {((inputs: Mod_Versions_All_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_All_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_all_count(inputs)
	if (locale === "de") return de_mod_versions_all_count(inputs)
	if (locale === "fr") return fr_mod_versions_all_count(inputs)
	if (locale === "it") return it_mod_versions_all_count(inputs)
	if (locale === "nl") return nl_mod_versions_all_count(inputs)
	if (locale === "pl") return pl_mod_versions_all_count(inputs)
	if (locale === "pt") return pt_mod_versions_all_count(inputs)
	if (locale === "ru") return ru_mod_versions_all_count(inputs)
	if (locale === "sv") return sv_mod_versions_all_count(inputs)
	if (locale === "tr") return tr_mod_versions_all_count(inputs)
	if (locale === "zh") return zh_mod_versions_all_count(inputs)
	if (locale === "ja") return ja_mod_versions_all_count(inputs)
	return en_mod_versions_all_count(inputs)
});
