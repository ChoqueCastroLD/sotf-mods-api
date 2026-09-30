/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Ui_Domain_Compat_Mixed_OnInputs */

const en_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mixed reports on ${i?.build}`)
};

const es_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reportes mixtos en ${i?.build}`)
};

const de_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemischte Berichte zu ${i?.build}`)
};

const fr_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rapports mitigés sur ${i?.build}`)
};

const it_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rapporti contrastanti su ${i?.build}`)
};

const nl_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wisselende rapporten op ${i?.build}`)
};

const pl_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mieszane raporty na ${i?.build}`)
};

const pt_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relatórios divergentes em ${i?.build}`)
};

const ru_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отчёты расходятся на ${i?.build}`)
};

const sv_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Blandade rapporter på ${i?.build}`)
};

const tr_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} için karışık raporlar`)
};

const zh_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} 上的报告不一`)
};

const ja_ui_domain_compat_mixed_on = /** @type {(inputs: Ui_Domain_Compat_Mixed_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} での報告は賛否あり`)
};

/**
* | output |
* | --- |
* | "Mixed reports on {build}" |
*
* @param {Ui_Domain_Compat_Mixed_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_mixed_on = /** @type {((inputs: Ui_Domain_Compat_Mixed_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_Mixed_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_mixed_on(inputs)
	if (locale === "de") return de_ui_domain_compat_mixed_on(inputs)
	if (locale === "fr") return fr_ui_domain_compat_mixed_on(inputs)
	if (locale === "it") return it_ui_domain_compat_mixed_on(inputs)
	if (locale === "nl") return nl_ui_domain_compat_mixed_on(inputs)
	if (locale === "pl") return pl_ui_domain_compat_mixed_on(inputs)
	if (locale === "pt") return pt_ui_domain_compat_mixed_on(inputs)
	if (locale === "ru") return ru_ui_domain_compat_mixed_on(inputs)
	if (locale === "sv") return sv_ui_domain_compat_mixed_on(inputs)
	if (locale === "tr") return tr_ui_domain_compat_mixed_on(inputs)
	if (locale === "zh") return zh_ui_domain_compat_mixed_on(inputs)
	if (locale === "ja") return ja_ui_domain_compat_mixed_on(inputs)
	return en_ui_domain_compat_mixed_on(inputs)
});
