/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependencies_Optional_TitleInputs */

const en_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works better with`)
};

const es_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona mejor con`)
};

const de_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft besser mit`)
};

const fr_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne mieux avec`)
};

const it_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona meglio con`)
};

const nl_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt beter met`)
};

const pl_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa lepiej z`)
};

const pt_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona melhor com`)
};

const ru_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучше работает с`)
};

const sv_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar bättre med`)
};

const tr_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şununla daha iyi çalışır`)
};

const zh_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搭配使用效果更好`)
};

const ja_ui_domain_dependencies_optional_title = /** @type {(inputs: Ui_Domain_Dependencies_Optional_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`併用がおすすめ`)
};

/**
* | output |
* | --- |
* | "Works better with" |
*
* @param {Ui_Domain_Dependencies_Optional_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependencies_optional_title = /** @type {((inputs?: Ui_Domain_Dependencies_Optional_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_Optional_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependencies_optional_title(inputs)
	if (locale === "de") return de_ui_domain_dependencies_optional_title(inputs)
	if (locale === "fr") return fr_ui_domain_dependencies_optional_title(inputs)
	if (locale === "it") return it_ui_domain_dependencies_optional_title(inputs)
	if (locale === "nl") return nl_ui_domain_dependencies_optional_title(inputs)
	if (locale === "pl") return pl_ui_domain_dependencies_optional_title(inputs)
	if (locale === "pt") return pt_ui_domain_dependencies_optional_title(inputs)
	if (locale === "ru") return ru_ui_domain_dependencies_optional_title(inputs)
	if (locale === "sv") return sv_ui_domain_dependencies_optional_title(inputs)
	if (locale === "tr") return tr_ui_domain_dependencies_optional_title(inputs)
	if (locale === "zh") return zh_ui_domain_dependencies_optional_title(inputs)
	if (locale === "ja") return ja_ui_domain_dependencies_optional_title(inputs)
	return en_ui_domain_dependencies_optional_title(inputs)
});
