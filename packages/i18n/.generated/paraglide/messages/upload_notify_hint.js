/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Notify_HintInputs */

const en_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers of the mod get a signal about this version.`)
};

const es_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los seguidores del mod reciben una señal con esta versión.`)
};

const de_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower des Mods erhalten ein Signal zu dieser Version.`)
};

const fr_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les abonnés du mod reçoivent un signal pour cette version.`)
};

const it_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I follower della mod ricevono un segnale per questa versione.`)
};

const nl_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers van de mod krijgen een signaal over deze versie.`)
};

const pl_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący moda dostaną sygnał o tej wersji.`)
};

const pt_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os seguidores do mod recebem um sinal sobre esta versão.`)
};

const ru_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики мода получат сигнал об этой версии.`)
};

const sv_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddens följare får en signal om den här versionen.`)
};

const tr_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun takipçileri bu sürüm için bir sinyal alır.`)
};

const zh_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组的关注者会收到关于此版本的信号。`)
};

const ja_upload_notify_hint = /** @type {(inputs: Upload_Notify_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODのフォロワーにこのバージョンのシグナルが届きます。`)
};

/**
* | output |
* | --- |
* | "Followers of the mod get a signal about this version." |
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
