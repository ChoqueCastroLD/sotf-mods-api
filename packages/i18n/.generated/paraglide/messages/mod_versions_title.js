/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Versions_TitleInputs */

const en_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} version`);
	return /** @type {LocalizedString} */ (`${count__number} versions`)
	
};

const es_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} versión`);
	return /** @type {LocalizedString} */ (`${count__number} versiones`)
	
};

const de_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Version`);
	return /** @type {LocalizedString} */ (`${count__number} Versionen`)
	
};

const fr_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} version`);
	return /** @type {LocalizedString} */ (`${count__number} versions`)
	
};

const it_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} versione`);
	return /** @type {LocalizedString} */ (`${count__number} versioni`)
	
};

const nl_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} versie`);
	return /** @type {LocalizedString} */ (`${count__number} versies`)
	
};

const pl_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wersja`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wersje`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wersji`);
	return /** @type {LocalizedString} */ (`${count__number} wersji`)
	
};

const pt_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} versão`);
	return /** @type {LocalizedString} */ (`${count__number} versões`)
	
};

const ru_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} версия`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} версии`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} версий`);
	return /** @type {LocalizedString} */ (`${count__number} версии`)
	
};

const sv_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} version`);
	return /** @type {LocalizedString} */ (`${count__number} versioner`)
	
};

const tr_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sürüm`);
	return /** @type {LocalizedString} */ (`${count__number} sürüm`)
	
};

const zh_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个版本`)
};

const ja_mod_versions_title = /** @type {(inputs: Mod_Versions_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} バージョン`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} version" |
* | * | "{count__number} versions" |
*
* @param {Mod_Versions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_title = /** @type {((inputs: Mod_Versions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_title(inputs)
	if (locale === "de") return de_mod_versions_title(inputs)
	if (locale === "fr") return fr_mod_versions_title(inputs)
	if (locale === "it") return it_mod_versions_title(inputs)
	if (locale === "nl") return nl_mod_versions_title(inputs)
	if (locale === "pl") return pl_mod_versions_title(inputs)
	if (locale === "pt") return pt_mod_versions_title(inputs)
	if (locale === "ru") return ru_mod_versions_title(inputs)
	if (locale === "sv") return sv_mod_versions_title(inputs)
	if (locale === "tr") return tr_mod_versions_title(inputs)
	if (locale === "zh") return zh_mod_versions_title(inputs)
	if (locale === "ja") return ja_mod_versions_title(inputs)
	return en_mod_versions_title(inputs)
});
