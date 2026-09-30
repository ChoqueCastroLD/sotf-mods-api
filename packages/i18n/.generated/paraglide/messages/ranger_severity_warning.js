/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Severity_WarningInputs */

const en_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`needs a human look`)
};

const es_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`necesita revisión humana`)
};

const de_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`braucht einen menschlichen Blick`)
};

const fr_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`demande un regard humain`)
};

const it_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`serve uno sguardo umano`)
};

const nl_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`vraagt een menselijke blik`)
};

const pl_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wymaga ludzkiego oka`)
};

const pt_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`precisa de um olhar humano`)
};

const ru_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`нужен взгляд человека`)
};

const sv_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`behöver en mänsklig blick`)
};

const tr_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`insan gözü gerekir`)
};

const zh_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要人工查看`)
};

const ja_ranger_severity_warning = /** @type {(inputs: Ranger_Severity_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人による確認が必要`)
};

/**
* | output |
* | --- |
* | "needs a human look" |
*
* @param {Ranger_Severity_WarningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_severity_warning = /** @type {((inputs?: Ranger_Severity_WarningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Severity_WarningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_severity_warning(inputs)
	if (locale === "de") return de_ranger_severity_warning(inputs)
	if (locale === "fr") return fr_ranger_severity_warning(inputs)
	if (locale === "it") return it_ranger_severity_warning(inputs)
	if (locale === "nl") return nl_ranger_severity_warning(inputs)
	if (locale === "pl") return pl_ranger_severity_warning(inputs)
	if (locale === "pt") return pt_ranger_severity_warning(inputs)
	if (locale === "ru") return ru_ranger_severity_warning(inputs)
	if (locale === "sv") return sv_ranger_severity_warning(inputs)
	if (locale === "tr") return tr_ranger_severity_warning(inputs)
	if (locale === "zh") return zh_ranger_severity_warning(inputs)
	if (locale === "ja") return ja_ranger_severity_warning(inputs)
	return en_ranger_severity_warning(inputs)
});
