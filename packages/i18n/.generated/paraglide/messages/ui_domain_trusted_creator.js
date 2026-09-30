/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Trusted_CreatorInputs */

const en_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted creator`)
};

const es_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador de confianza`)
};

const de_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdiger Ersteller`)
};

const fr_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur de confiance`)
};

const it_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore affidabile`)
};

const nl_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwde maker`)
};

const pl_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany twórca`)
};

const pt_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador de confiança`)
};

const ru_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный автор`)
};

const sv_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd skapare`)
};

const tr_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir içerik üretici`)
};

const zh_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可信创作者`)
};

const ja_ui_domain_trusted_creator = /** @type {(inputs: Ui_Domain_Trusted_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼できるクリエイター`)
};

/**
* | output |
* | --- |
* | "Trusted creator" |
*
* @param {Ui_Domain_Trusted_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_trusted_creator = /** @type {((inputs?: Ui_Domain_Trusted_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Trusted_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_trusted_creator(inputs)
	if (locale === "de") return de_ui_domain_trusted_creator(inputs)
	if (locale === "fr") return fr_ui_domain_trusted_creator(inputs)
	if (locale === "it") return it_ui_domain_trusted_creator(inputs)
	if (locale === "nl") return nl_ui_domain_trusted_creator(inputs)
	if (locale === "pl") return pl_ui_domain_trusted_creator(inputs)
	if (locale === "pt") return pt_ui_domain_trusted_creator(inputs)
	if (locale === "ru") return ru_ui_domain_trusted_creator(inputs)
	if (locale === "sv") return sv_ui_domain_trusted_creator(inputs)
	if (locale === "tr") return tr_ui_domain_trusted_creator(inputs)
	if (locale === "zh") return zh_ui_domain_trusted_creator(inputs)
	if (locale === "ja") return ja_ui_domain_trusted_creator(inputs)
	return en_ui_domain_trusted_creator(inputs)
});
