/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Broken_ActionInputs */

const en_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add your field report`)
};

const es_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade tu reporte de campo`)
};

const de_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht hinzufügen`)
};

const fr_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter votre rapport de terrain`)
};

const it_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi il tuo rapporto sul campo`)
};

const nl_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg je veldrapport toe`)
};

const pl_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj swój raport terenowy`)
};

const pt_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione seu relatório de campo`)
};

const ru_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить полевой отчёт`)
};

const sv_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till din fältrapport`)
};

const tr_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporunu ekle`)
};

const zh_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交你的实地报告`)
};

const ja_mod_banner_broken_action = /** @type {(inputs: Mod_Banner_Broken_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートを追加`)
};

/**
* | output |
* | --- |
* | "Add your field report" |
*
* @param {Mod_Banner_Broken_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_broken_action = /** @type {((inputs?: Mod_Banner_Broken_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Broken_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_broken_action(inputs)
	if (locale === "de") return de_mod_banner_broken_action(inputs)
	if (locale === "fr") return fr_mod_banner_broken_action(inputs)
	if (locale === "it") return it_mod_banner_broken_action(inputs)
	if (locale === "nl") return nl_mod_banner_broken_action(inputs)
	if (locale === "pl") return pl_mod_banner_broken_action(inputs)
	if (locale === "pt") return pt_mod_banner_broken_action(inputs)
	if (locale === "ru") return ru_mod_banner_broken_action(inputs)
	if (locale === "sv") return sv_mod_banner_broken_action(inputs)
	if (locale === "tr") return tr_mod_banner_broken_action(inputs)
	if (locale === "zh") return zh_mod_banner_broken_action(inputs)
	if (locale === "ja") return ja_mod_banner_broken_action(inputs)
	return en_mod_banner_broken_action(inputs)
});
