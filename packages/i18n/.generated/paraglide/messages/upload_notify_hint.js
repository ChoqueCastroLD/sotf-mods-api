/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Notify_HintInputs */

const en_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers of the mod are notified about this version.`)
};

const es_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los seguidores del mod reciben una notificación sobre esta versión.`)
};

const de_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower des Mods werden über diese Version benachrichtigt.`)
};

const fr_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les abonnés du mod sont notifiés de cette version.`)
};

const it_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I follower della mod ricevono una notifica per questa versione.`)
};

const nl_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers van de mod krijgen een melding over deze versie.`)
};

const pl_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący moda dostaną powiadomienie o tej wersji.`)
};

const pt_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os seguidores do mod recebem uma notificação sobre esta versão.`)
};

const ru_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики мода получат уведомление об этой версии.`)
};

const sv_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddens följare får en avisering om den här versionen.`)
};

const tr_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun takipçileri bu sürüm için bildirim alır.`)
};

const zh_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组的关注者会收到关于此版本的通知。`)
};

const ja_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODのフォロワーにこのバージョンの通知が届きます。`)
};

/**
* | output |
* | --- |
* | "Followers of the mod are notified about this version." |
*
* @param {Upload_Notify_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_notify_hint = /** @type {((inputs?: Upload_Notify_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Notify_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_notify_hint(inputs)
	if (locale === "de") return de_upload_notify_hint(inputs)
	if (locale === "fr") return fr_upload_notify_hint(inputs)
	if (locale === "it") return it_upload_notify_hint(inputs)
	if (locale === "nl") return nl_upload_notify_hint(inputs)
	if (locale === "pl") return pl_upload_notify_hint(inputs)
	if (locale === "pt") return pt_upload_notify_hint(inputs)
	if (locale === "ru") return ru_upload_notify_hint(inputs)
	if (locale === "sv") return sv_upload_notify_hint(inputs)
	if (locale === "tr") return tr_upload_notify_hint(inputs)
	if (locale === "zh") return zh_upload_notify_hint(inputs)
	if (locale === "ja") return ja_upload_notify_hint(inputs)
	return en_upload_notify_hint(inputs)
});
