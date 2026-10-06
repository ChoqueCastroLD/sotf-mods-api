/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Notify_OnInputs */

const en_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update notifications on`)
};

const es_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificaciones de actualización activadas`)
};

const de_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update-Benachrichtigungen an`)
};

const fr_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications de mise à jour activées`)
};

const it_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifiche di aggiornamento attive`)
};

const nl_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updatemeldingen aan`)
};

const pl_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadomienia o aktualizacjach włączone`)
};

const pt_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificações de atualização ativadas`)
};

const ru_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомления об обновлениях включены`)
};

const sv_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringsaviseringar på`)
};

const tr_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelleme bildirimleri açık`)
};

const zh_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新通知已开启`)
};

const ja_me_notify_on = /** @type {(inputs: Me_Notify_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新通知 オン`)
};

/**
* | output |
* | --- |
* | "Update notifications on" |
*
* @param {Me_Notify_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_notify_on = /** @type {((inputs?: Me_Notify_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Notify_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_notify_on(inputs)
	if (locale === "de") return de_me_notify_on(inputs)
	if (locale === "fr") return fr_me_notify_on(inputs)
	if (locale === "it") return it_me_notify_on(inputs)
	if (locale === "nl") return nl_me_notify_on(inputs)
	if (locale === "pl") return pl_me_notify_on(inputs)
	if (locale === "pt") return pt_me_notify_on(inputs)
	if (locale === "ru") return ru_me_notify_on(inputs)
	if (locale === "sv") return sv_me_notify_on(inputs)
	if (locale === "tr") return tr_me_notify_on(inputs)
	if (locale === "zh") return zh_me_notify_on(inputs)
	if (locale === "ja") return ja_me_notify_on(inputs)
	return en_me_notify_on(inputs)
});
