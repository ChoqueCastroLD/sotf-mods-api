/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ versions: NonNullable<unknown>, mods: NonNullable<unknown> }} Basecamp_Kpi_Pending_DetailInputs */

const en_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("en", i?.versions, {});
	const versions__number = registry.number("en", i?.versions, {});
	const mods__plural = registry.plural("en", i?.mods, {});
	const mods__number = registry.number("en", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versions, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versions, ${mods__number} mods`)
	
};

const es_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("es", i?.versions, {});
	const versions__number = registry.number("es", i?.versions, {});
	const mods__plural = registry.plural("es", i?.mods, {});
	const mods__number = registry.number("es", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versión, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versión, ${mods__number} mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versiones, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versiones, ${mods__number} mods`)
	
};

const de_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("de", i?.versions, {});
	const versions__number = registry.number("de", i?.versions, {});
	const mods__plural = registry.plural("de", i?.mods, {});
	const mods__number = registry.number("de", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} Version, ${mods__number} Mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} Version, ${mods__number} Mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} Versionen, ${mods__number} Mod`);
	return /** @type {LocalizedString} */ (`${versions__number} Versionen, ${mods__number} Mods`)
	
};

const fr_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("fr", i?.versions, {});
	const versions__number = registry.number("fr", i?.versions, {});
	const mods__plural = registry.plural("fr", i?.mods, {});
	const mods__number = registry.number("fr", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versions, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versions, ${mods__number} mods`)
	
};

const it_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("it", i?.versions, {});
	const versions__number = registry.number("it", i?.versions, {});
	const mods__plural = registry.plural("it", i?.mods, {});
	const mods__number = registry.number("it", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versione, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versione, ${mods__number} mod`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versioni, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versioni, ${mods__number} mod`)
	
};

const nl_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("nl", i?.versions, {});
	const versions__number = registry.number("nl", i?.versions, {});
	const mods__plural = registry.plural("nl", i?.mods, {});
	const mods__number = registry.number("nl", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versie, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versie, ${mods__number} mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versies, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versies, ${mods__number} mods`)
	
};

const pl_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("pl", i?.versions, {});
	const versions__number = registry.number("pl", i?.versions, {});
	const mods__plural = registry.plural("pl", i?.mods, {});
	const mods__number = registry.number("pl", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} wersja, ${mods__number} mod`);
	if (versions__plural === "one" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} wersja, ${mods__number} mody`);
	if (versions__plural === "one" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} wersja, ${mods__number} modów`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} wersja, ${mods__number} moda`);
	if (versions__plural === "few" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} wersje, ${mods__number} mod`);
	if (versions__plural === "few" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} wersje, ${mods__number} mody`);
	if (versions__plural === "few" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} wersje, ${mods__number} modów`);
	if (versions__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} wersje, ${mods__number} moda`);
	if (versions__plural === "many" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} mod`);
	if (versions__plural === "many" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} mody`);
	if (versions__plural === "many" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} modów`);
	if (versions__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} moda`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} mod`);
	if (mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} mody`);
	if (mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} modów`);
	return /** @type {LocalizedString} */ (`${versions__number} wersji, ${mods__number} moda`)
	
};

const pt_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("pt", i?.versions, {});
	const versions__number = registry.number("pt", i?.versions, {});
	const mods__plural = registry.plural("pt", i?.mods, {});
	const mods__number = registry.number("pt", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versão, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versão, ${mods__number} mods`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versões, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} versões, ${mods__number} mods`)
	
};

const ru_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("ru", i?.versions, {});
	const versions__number = registry.number("ru", i?.versions, {});
	const mods__plural = registry.plural("ru", i?.mods, {});
	const mods__number = registry.number("ru", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} версия, ${mods__number} мод`);
	if (versions__plural === "one" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} версия, ${mods__number} мода`);
	if (versions__plural === "one" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} версия, ${mods__number} модов`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} версия, ${mods__number} мода`);
	if (versions__plural === "few" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мод`);
	if (versions__plural === "few" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мода`);
	if (versions__plural === "few" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} модов`);
	if (versions__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мода`);
	if (versions__plural === "many" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} версий, ${mods__number} мод`);
	if (versions__plural === "many" && mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} версий, ${mods__number} мода`);
	if (versions__plural === "many" && mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} версий, ${mods__number} модов`);
	if (versions__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} версий, ${mods__number} мода`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мод`);
	if (mods__plural === "few") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мода`);
	if (mods__plural === "many") return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} модов`);
	return /** @type {LocalizedString} */ (`${versions__number} версии, ${mods__number} мода`)
	
};

const sv_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("sv", i?.versions, {});
	const versions__number = registry.number("sv", i?.versions, {});
	const mods__plural = registry.plural("sv", i?.mods, {});
	const mods__number = registry.number("sv", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} modd`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} version, ${mods__number} moddar`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} versioner, ${mods__number} modd`);
	return /** @type {LocalizedString} */ (`${versions__number} versioner, ${mods__number} moddar`)
	
};

const tr_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {const versions__plural = registry.plural("tr", i?.versions, {});
	const versions__number = registry.number("tr", i?.versions, {});
	const mods__plural = registry.plural("tr", i?.mods, {});
	const mods__number = registry.number("tr", i?.mods, {});
	if (versions__plural === "one" && mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} sürüm, ${mods__number} mod`);
	if (versions__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} sürüm, ${mods__number} mod`);
	if (mods__plural === "one") return /** @type {LocalizedString} */ (`${versions__number} sürüm, ${mods__number} mod`);
	return /** @type {LocalizedString} */ (`${versions__number} sürüm, ${mods__number} mod`)
	
};

const zh_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {
	const versions__plural = registry.plural("zh", i?.versions, {});
	const versions__number = registry.number("zh", i?.versions, {});
	const mods__plural = registry.plural("zh", i?.mods, {});
	const mods__number = registry.number("zh", i?.mods, {});return /** @type {LocalizedString} */ (`${versions__number} 个版本，${mods__number} 个模组`)
};

const ja_basecamp_kpi_pending_detail = /** @type {(inputs: Basecamp_Kpi_Pending_DetailInputs) => LocalizedString} */ (i) => {
	const versions__plural = registry.plural("ja", i?.versions, {});
	const versions__number = registry.number("ja", i?.versions, {});
	const mods__plural = registry.plural("ja", i?.mods, {});
	const mods__number = registry.number("ja", i?.mods, {});return /** @type {LocalizedString} */ (`バージョン ${versions__number} 件、MOD ${mods__number} 件`)
};

/**
* | versions__plural | mods__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{versions__number} version, {mods__number} mod" |
* | "one" | * | "{versions__number} version, {mods__number} mods" |
* | * | "one" | "{versions__number} versions, {mods__number} mod" |
* | * | * | "{versions__number} versions, {mods__number} mods" |
*
* @param {Basecamp_Kpi_Pending_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_pending_detail = /** @type {((inputs: Basecamp_Kpi_Pending_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Pending_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_pending_detail(inputs)
	if (locale === "de") return de_basecamp_kpi_pending_detail(inputs)
	if (locale === "fr") return fr_basecamp_kpi_pending_detail(inputs)
	if (locale === "it") return it_basecamp_kpi_pending_detail(inputs)
	if (locale === "nl") return nl_basecamp_kpi_pending_detail(inputs)
	if (locale === "pl") return pl_basecamp_kpi_pending_detail(inputs)
	if (locale === "pt") return pt_basecamp_kpi_pending_detail(inputs)
	if (locale === "ru") return ru_basecamp_kpi_pending_detail(inputs)
	if (locale === "sv") return sv_basecamp_kpi_pending_detail(inputs)
	if (locale === "tr") return tr_basecamp_kpi_pending_detail(inputs)
	if (locale === "zh") return zh_basecamp_kpi_pending_detail(inputs)
	if (locale === "ja") return ja_basecamp_kpi_pending_detail(inputs)
	return en_basecamp_kpi_pending_detail(inputs)
});
