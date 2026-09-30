/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Request_Fulfilled_HintInputs */

const en_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod you requested or voted for was published.`)
};

const es_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se publicó un mod que pediste o votaste.`)
};

const de_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod, den du angefragt oder unterstützt hast, wurde veröffentlicht.`)
};

const fr_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod que vous avez demandé ou soutenu a été publié.`)
};

const it_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È stato pubblicato un mod che hai richiesto o votato.`)
};

const nl_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod waar je om vroeg of op stemde is gepubliceerd.`)
};

const pl_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowano mod, o który prosiłeś(-aś) lub na który głosowałeś(-aś).`)
};

const pt_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foi publicado um mod que pediste ou votaste.`)
};

const ru_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликован мод, который вы запрашивали или за который голосовали.`)
};

const sv_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En mod du bett om eller röstade på har publicerats.`)
};

const tr_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstediğin veya oy verdiğin bir mod yayınlandı.`)
};

const zh_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你请求或投票支持的模组已发布。`)
};

const ja_settings_notif_request_fulfilled_hint = /** @type {(inputs: Settings_Notif_Request_Fulfilled_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたがリクエストまたは投票した MOD が公開されました。`)
};

/**
* | output |
* | --- |
* | "A mod you requested or voted for was published." |
*
* @param {Settings_Notif_Request_Fulfilled_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_request_fulfilled_hint = /** @type {((inputs?: Settings_Notif_Request_Fulfilled_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Request_Fulfilled_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "de") return de_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "fr") return fr_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "it") return it_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "nl") return nl_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "pl") return pl_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "pt") return pt_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "ru") return ru_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "sv") return sv_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "tr") return tr_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "zh") return zh_settings_notif_request_fulfilled_hint(inputs)
	if (locale === "ja") return ja_settings_notif_request_fulfilled_hint(inputs)
	return en_settings_notif_request_fulfilled_hint(inputs)
});
