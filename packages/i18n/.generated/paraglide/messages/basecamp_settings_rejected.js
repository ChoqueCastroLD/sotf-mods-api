/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_RejectedInputs */

const en_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators asked for changes before publishing it.`)
};

const es_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los moderadores pidieron cambios antes de publicarlo.`)
};

const de_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Moderatoren haben vor der Veröffentlichung Änderungen erbeten.`)
};

const fr_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modérateurs ont demandé des modifications avant de le publier.`)
};

const it_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I moderatori hanno chiesto modifiche prima di pubblicarla.`)
};

const nl_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De moderators vroegen om wijzigingen voordat hij gepubliceerd wordt.`)
};

const pl_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorzy poprosili o zmiany przed publikacją.`)
};

const pt_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os moderadores pediram alterações antes de publicá-lo.`)
};

const ru_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модераторы попросили изменения перед публикацией.`)
};

const sv_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorerna begärde ändringar innan publicering.`)
};

const tr_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörler yayınlamadan önce değişiklik istedi.`)
};

const zh_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主要求在发布前进行修改。`)
};

const ja_basecamp_settings_rejected = /** @type {(inputs: Basecamp_Settings_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開前にモデレーターから修正の依頼がありました。`)
};

/**
* | output |
* | --- |
* | "Moderators asked for changes before publishing it." |
*
* @param {Basecamp_Settings_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_rejected = /** @type {((inputs?: Basecamp_Settings_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_rejected(inputs)
	if (locale === "de") return de_basecamp_settings_rejected(inputs)
	if (locale === "fr") return fr_basecamp_settings_rejected(inputs)
	if (locale === "it") return it_basecamp_settings_rejected(inputs)
	if (locale === "nl") return nl_basecamp_settings_rejected(inputs)
	if (locale === "pl") return pl_basecamp_settings_rejected(inputs)
	if (locale === "pt") return pt_basecamp_settings_rejected(inputs)
	if (locale === "ru") return ru_basecamp_settings_rejected(inputs)
	if (locale === "sv") return sv_basecamp_settings_rejected(inputs)
	if (locale === "tr") return tr_basecamp_settings_rejected(inputs)
	if (locale === "zh") return zh_basecamp_settings_rejected(inputs)
	if (locale === "ja") return ja_basecamp_settings_rejected(inputs)
	return en_basecamp_settings_rejected(inputs)
});
