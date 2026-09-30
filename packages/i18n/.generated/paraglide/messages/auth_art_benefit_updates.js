/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Art_Benefit_UpdatesInputs */

const en_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get pinged when mods update`)
};

const es_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibe avisos cuando se actualicen`)
};

const de_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lass dich bei Mod-Updates benachrichtigen`)
};

const fr_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soyez prévenu des mises à jour`)
};

const it_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi un avviso quando le mod si aggiornano`)
};

const nl_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krijg een seintje bij mod-updates`)
};

const pl_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostawaj powiadomienia o aktualizacjach modów`)
};

const pt_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receba avisos quando os mods forem atualizados`)
};

const ru_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получайте уведомления об обновлениях модов`)
};

const sv_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få en signal när moddar uppdateras`)
};

const tr_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar güncellendiğinde haber al`)
};

const zh_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组更新时收到提醒`)
};

const ja_auth_art_benefit_updates = /** @type {(inputs: Auth_Art_Benefit_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD の更新を通知で受け取る`)
};

/**
* | output |
* | --- |
* | "Get pinged when mods update" |
*
* @param {Auth_Art_Benefit_UpdatesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_art_benefit_updates = /** @type {((inputs?: Auth_Art_Benefit_UpdatesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_Benefit_UpdatesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_art_benefit_updates(inputs)
	if (locale === "de") return de_auth_art_benefit_updates(inputs)
	if (locale === "fr") return fr_auth_art_benefit_updates(inputs)
	if (locale === "it") return it_auth_art_benefit_updates(inputs)
	if (locale === "nl") return nl_auth_art_benefit_updates(inputs)
	if (locale === "pl") return pl_auth_art_benefit_updates(inputs)
	if (locale === "pt") return pt_auth_art_benefit_updates(inputs)
	if (locale === "ru") return ru_auth_art_benefit_updates(inputs)
	if (locale === "sv") return sv_auth_art_benefit_updates(inputs)
	if (locale === "tr") return tr_auth_art_benefit_updates(inputs)
	if (locale === "zh") return zh_auth_art_benefit_updates(inputs)
	if (locale === "ja") return ja_auth_art_benefit_updates(inputs)
	return en_auth_art_benefit_updates(inputs)
});
