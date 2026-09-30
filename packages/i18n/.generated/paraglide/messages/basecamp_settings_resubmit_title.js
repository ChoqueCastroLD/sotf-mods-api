/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Settings_Resubmit_TitleInputs */

const en_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resubmit ${i?.name}?`)
};

const es_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Reenviar ${i?.name}?`)
};

const de_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} erneut einreichen?`)
};

const fr_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Renvoyer ${i?.name} ?`)
};

const it_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rinviare ${i?.name}?`)
};

const nl_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} opnieuw insturen?`)
};

const pl_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wysłać ${i?.name} ponownie?`)
};

const pt_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reenviar ${i?.name}?`)
};

const ru_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отправить ${i?.name} снова?`)
};

const sv_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skicka in ${i?.name} igen?`)
};

const tr_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yeniden gönderilsin mi?`)
};

const zh_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重新提交 ${i?.name}？`)
};

const ja_basecamp_settings_resubmit_title = /** @type {(inputs: Basecamp_Settings_Resubmit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を再提出しますか？`)
};

/**
* | output |
* | --- |
* | "Resubmit {name}?" |
*
* @param {Basecamp_Settings_Resubmit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_resubmit_title = /** @type {((inputs: Basecamp_Settings_Resubmit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Resubmit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_resubmit_title(inputs)
	if (locale === "de") return de_basecamp_settings_resubmit_title(inputs)
	if (locale === "fr") return fr_basecamp_settings_resubmit_title(inputs)
	if (locale === "it") return it_basecamp_settings_resubmit_title(inputs)
	if (locale === "nl") return nl_basecamp_settings_resubmit_title(inputs)
	if (locale === "pl") return pl_basecamp_settings_resubmit_title(inputs)
	if (locale === "pt") return pt_basecamp_settings_resubmit_title(inputs)
	if (locale === "ru") return ru_basecamp_settings_resubmit_title(inputs)
	if (locale === "sv") return sv_basecamp_settings_resubmit_title(inputs)
	if (locale === "tr") return tr_basecamp_settings_resubmit_title(inputs)
	if (locale === "zh") return zh_basecamp_settings_resubmit_title(inputs)
	if (locale === "ja") return ja_basecamp_settings_resubmit_title(inputs)
	return en_basecamp_settings_resubmit_title(inputs)
});
