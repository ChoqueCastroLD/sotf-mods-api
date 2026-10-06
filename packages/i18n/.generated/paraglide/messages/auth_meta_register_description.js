/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Register_DescriptionInputs */

const en_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Join SOTF Mods: follow mods, get notified when they update and share your own creations.`)
};

const es_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Únete a SOTF Mods: sigue mods, recibe avisos cuando se actualicen y comparte tus creaciones.`)
};

const de_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mach mit bei SOTF Mods: folge Mods, lass dich bei Updates benachrichtigen und teile deine eigenen Kreationen.`)
};

const fr_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejoignez SOTF Mods : suivez des mods, soyez prévenu de leurs mises à jour et partagez vos créations.`)
};

const it_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unisciti a SOTF Mods: segui le mod, ricevi una notifica quando si aggiornano e condividi le tue creazioni.`)
};

const nl_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doe mee met SOTF Mods: volg mods, krijg een melding bij updates en deel je eigen creaties.`)
};

const pl_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz do SOTF Mods: obserwuj mody, dostawaj powiadomienia o aktualizacjach i dziel się własnymi dziełami.`)
};

const pt_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participe do SOTF Mods: siga mods, receba avisos quando forem atualizados e compartilhe suas criações.`)
};

const ru_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Присоединяйтесь к SOTF Mods: следите за модами, получайте уведомления об обновлениях и делитесь своими творениями.`)
};

const sv_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå med i SOTF Mods: följ moddar, få en avisering när de uppdateras och dela dina egna skapelser.`)
};

const tr_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’a katıl: modları takip et, güncellendiklerinde haber al ve kendi eserlerini paylaş.`)
};

const zh_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加入 SOTF Mods：关注模组，在更新时收到提醒，并分享你的作品。`)
};

const ja_auth_meta_register_description = /** @type {(inputs: Auth_Meta_Register_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods に参加して、MOD をフォローし、更新の通知を受け取り、自分の作品を共有しましょう。`)
};

/**
* | output |
* | --- |
* | "Join SOTF Mods: follow mods, get notified when they update and share your own creations." |
*
* @param {Auth_Meta_Register_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_register_description = /** @type {((inputs?: Auth_Meta_Register_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Register_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_register_description(inputs)
	if (locale === "de") return de_auth_meta_register_description(inputs)
	if (locale === "fr") return fr_auth_meta_register_description(inputs)
	if (locale === "it") return it_auth_meta_register_description(inputs)
	if (locale === "nl") return nl_auth_meta_register_description(inputs)
	if (locale === "pl") return pl_auth_meta_register_description(inputs)
	if (locale === "pt") return pt_auth_meta_register_description(inputs)
	if (locale === "ru") return ru_auth_meta_register_description(inputs)
	if (locale === "sv") return sv_auth_meta_register_description(inputs)
	if (locale === "tr") return tr_auth_meta_register_description(inputs)
	if (locale === "zh") return zh_auth_meta_register_description(inputs)
	if (locale === "ja") return ja_auth_meta_register_description(inputs)
	return en_auth_meta_register_description(inputs)
});
