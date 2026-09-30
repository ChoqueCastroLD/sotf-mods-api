/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_TextInputs */

const en_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell the rangers why. They answer through Signals.`)
};

const es_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuéntales a los guardabosques por qué. Te responderán por Señales.`)
};

const de_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erkläre den Rangern den Grund. Sie antworten über Signale.`)
};

const fr_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expliquez la raison aux rangers. Ils répondent via Signaux.`)
};

const it_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiega il motivo ai ranger. Ti risponderanno tramite Segnali.`)
};

const nl_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertel de rangers waarom. Ze antwoorden via Signalen.`)
};

const pl_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz strażnikom dlaczego. Odpowiedzą przez Sygnały.`)
};

const pt_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte aos guardas o motivo. Eles respondem pelos Sinais.`)
};

const ru_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объясните рейнджерам причину. Они ответят через «Сигналы».`)
};

const sv_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för rangers varför. De svarar via Signaler.`)
};

const tr_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koruculara nedenini anlat. Sinyaller üzerinden yanıt verirler.`)
};

const zh_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉护林员原因。他们会通过信号回复你。`)
};

const ja_basecamp_settings_removal_text = /** @type {(inputs: Basecamp_Settings_Removal_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由をレンジャーに伝えてください。返答はシグナルで届きます。`)
};

/**
* | output |
* | --- |
* | "Tell the rangers why. They answer through Signals." |
*
* @param {Basecamp_Settings_Removal_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_text = /** @type {((inputs?: Basecamp_Settings_Removal_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_text(inputs)
	if (locale === "de") return de_basecamp_settings_removal_text(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_text(inputs)
	if (locale === "it") return it_basecamp_settings_removal_text(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_text(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_text(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_text(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_text(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_text(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_text(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_text(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_text(inputs)
	return en_basecamp_settings_removal_text(inputs)
});
