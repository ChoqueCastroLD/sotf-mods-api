/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Loader_OtherInputs */

const en_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other loader`)
};

const es_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro cargador`)
};

const de_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anderer Loader`)
};

const fr_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre chargeur`)
};

const it_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro loader`)
};

const nl_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere loader`)
};

const pl_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny loader`)
};

const pt_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro carregador`)
};

const ru_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другой загрузчик`)
};

const sv_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annan laddare`)
};

const tr_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer yükleyici`)
};

const zh_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他加载器`)
};

const ja_ui_domain_loader_other = /** @type {(inputs: Ui_Domain_Loader_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のローダー`)
};

/**
* | output |
* | --- |
* | "Other loader" |
*
* @param {Ui_Domain_Loader_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_loader_other = /** @type {((inputs?: Ui_Domain_Loader_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Loader_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_loader_other(inputs)
	if (locale === "de") return de_ui_domain_loader_other(inputs)
	if (locale === "fr") return fr_ui_domain_loader_other(inputs)
	if (locale === "it") return it_ui_domain_loader_other(inputs)
	if (locale === "nl") return nl_ui_domain_loader_other(inputs)
	if (locale === "pl") return pl_ui_domain_loader_other(inputs)
	if (locale === "pt") return pt_ui_domain_loader_other(inputs)
	if (locale === "ru") return ru_ui_domain_loader_other(inputs)
	if (locale === "sv") return sv_ui_domain_loader_other(inputs)
	if (locale === "tr") return tr_ui_domain_loader_other(inputs)
	if (locale === "zh") return zh_ui_domain_loader_other(inputs)
	if (locale === "ja") return ja_ui_domain_loader_other(inputs)
	return en_ui_domain_loader_other(inputs)
});
