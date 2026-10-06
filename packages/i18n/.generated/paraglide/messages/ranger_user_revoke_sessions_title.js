/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_User_Revoke_Sessions_TitleInputs */

const en_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Log ${i?.name} out everywhere?`)
};

const es_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Cerrar todas las sesiones de ${i?.name}?`)
};

const de_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} überall abmelden?`)
};

const fr_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Déconnecter ${i?.name} partout ?`)
};

const it_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Disconnettere ${i?.name} ovunque?`)
};

const nl_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} overal uitloggen?`)
};

const pl_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wylogować ${i?.name} wszędzie?`)
};

const pt_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Encerrar todas as sessões de ${i?.name}?`)
};

const ru_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Завершить все сеансы ${i?.name}?`)
};

const sv_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Logga ut ${i?.name} överallt?`)
};

const tr_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} her yerden çıkış yapsın mı?`)
};

const zh_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`让 ${i?.name} 在所有设备上退出？`)
};

const ja_ranger_user_revoke_sessions_title = /** @type {(inputs: Ranger_User_Revoke_Sessions_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をすべての端末からログアウトしますか？`)
};

/**
* | output |
* | --- |
* | "Log {name} out everywhere?" |
*
* @param {Ranger_User_Revoke_Sessions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_revoke_sessions_title = /** @type {((inputs: Ranger_User_Revoke_Sessions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Revoke_Sessions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_revoke_sessions_title(inputs)
	if (locale === "de") return de_ranger_user_revoke_sessions_title(inputs)
	if (locale === "fr") return fr_ranger_user_revoke_sessions_title(inputs)
	if (locale === "it") return it_ranger_user_revoke_sessions_title(inputs)
	if (locale === "nl") return nl_ranger_user_revoke_sessions_title(inputs)
	if (locale === "pl") return pl_ranger_user_revoke_sessions_title(inputs)
	if (locale === "pt") return pt_ranger_user_revoke_sessions_title(inputs)
	if (locale === "ru") return ru_ranger_user_revoke_sessions_title(inputs)
	if (locale === "sv") return sv_ranger_user_revoke_sessions_title(inputs)
	if (locale === "tr") return tr_ranger_user_revoke_sessions_title(inputs)
	if (locale === "zh") return zh_ranger_user_revoke_sessions_title(inputs)
	if (locale === "ja") return ja_ranger_user_revoke_sessions_title(inputs)
	return en_ranger_user_revoke_sessions_title(inputs)
});
