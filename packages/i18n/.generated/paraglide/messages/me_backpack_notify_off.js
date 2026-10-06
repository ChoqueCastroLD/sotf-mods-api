/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Backpack_Notify_OffInputs */

const en_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No more update notifications for ${i?.mod}`)
};

const es_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya no recibirás notificaciones de actualización de ${i?.mod}`)
};

const de_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Update-Benachrichtigungen mehr für ${i?.mod}`)
};

const fr_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plus de notifications de mise à jour pour ${i?.mod}`)
};

const it_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niente più notifiche di aggiornamento per ${i?.mod}`)
};

const nl_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen updatemeldingen meer voor ${i?.mod}`)
};

const pl_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Koniec powiadomień o aktualizacjach ${i?.mod}`)
};

const pt_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sem mais notificações de atualização de ${i?.mod}`)
};

const ru_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Больше никаких уведомлений об обновлениях ${i?.mod}`)
};

const sv_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga fler uppdateringsaviseringar för ${i?.mod}`)
};

const tr_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} için artık güncelleme bildirimi yok`)
};

const zh_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`不再接收 ${i?.mod} 的更新通知`)
};

const ja_me_backpack_notify_off = /** @type {(inputs: Me_Backpack_Notify_OffInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} の更新通知を停止しました`)
};

/**
* | output |
* | --- |
* | "No more update notifications for {mod}" |
*
* @param {Me_Backpack_Notify_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_notify_off = /** @type {((inputs: Me_Backpack_Notify_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Notify_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_notify_off(inputs)
	if (locale === "de") return de_me_backpack_notify_off(inputs)
	if (locale === "fr") return fr_me_backpack_notify_off(inputs)
	if (locale === "it") return it_me_backpack_notify_off(inputs)
	if (locale === "nl") return nl_me_backpack_notify_off(inputs)
	if (locale === "pl") return pl_me_backpack_notify_off(inputs)
	if (locale === "pt") return pt_me_backpack_notify_off(inputs)
	if (locale === "ru") return ru_me_backpack_notify_off(inputs)
	if (locale === "sv") return sv_me_backpack_notify_off(inputs)
	if (locale === "tr") return tr_me_backpack_notify_off(inputs)
	if (locale === "zh") return zh_me_backpack_notify_off(inputs)
	if (locale === "ja") return ja_me_backpack_notify_off(inputs)
	return en_me_backpack_notify_off(inputs)
});
