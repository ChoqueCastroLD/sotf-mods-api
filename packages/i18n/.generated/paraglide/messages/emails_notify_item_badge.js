/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Item_BadgeInputs */

const en_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You earned a new badge`)
};

const es_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has ganado una insignia nueva`)
};

const de_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ein neues Abzeichen erhalten`)
};

const fr_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez obtenu un nouveau badge`)
};

const it_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai ottenuto un nuovo badge`)
};

const nl_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt een nieuwe badge verdiend`)
};

const pl_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdobywasz nową odznakę`)
};

const pt_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ganhou um novo emblema`)
};

const ru_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получили новый значок`)
};

const sv_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har fått ett nytt märke`)
};

const tr_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir rozet kazandın`)
};

const zh_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你获得了一枚新徽章`)
};

const ja_emails_notify_item_badge = /** @type {(inputs: Emails_Notify_Item_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバッジを獲得しました`)
};

/**
* | output |
* | --- |
* | "You earned a new badge" |
*
* @param {Emails_Notify_Item_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_badge = /** @type {((inputs?: Emails_Notify_Item_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_badge(inputs)
	if (locale === "de") return de_emails_notify_item_badge(inputs)
	if (locale === "fr") return fr_emails_notify_item_badge(inputs)
	if (locale === "it") return it_emails_notify_item_badge(inputs)
	if (locale === "nl") return nl_emails_notify_item_badge(inputs)
	if (locale === "pl") return pl_emails_notify_item_badge(inputs)
	if (locale === "pt") return pt_emails_notify_item_badge(inputs)
	if (locale === "ru") return ru_emails_notify_item_badge(inputs)
	if (locale === "sv") return sv_emails_notify_item_badge(inputs)
	if (locale === "tr") return tr_emails_notify_item_badge(inputs)
	if (locale === "zh") return zh_emails_notify_item_badge(inputs)
	if (locale === "ja") return ja_emails_notify_item_badge(inputs)
	return en_emails_notify_item_badge(inputs)
});
