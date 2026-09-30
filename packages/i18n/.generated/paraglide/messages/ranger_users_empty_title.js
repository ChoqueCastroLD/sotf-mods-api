/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Empty_TitleInputs */

const en_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No users found`)
};

const es_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron usuarios`)
};

const de_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Benutzer gefunden`)
};

const fr_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun utilisateur trouvé`)
};

const it_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun utente trovato`)
};

const nl_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen gebruikers gevonden`)
};

const pl_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono użytkowników`)
};

const pt_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum usuário encontrado`)
};

const ru_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи не найдены`)
};

const sv_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga användare hittades`)
};

const tr_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı bulunamadı`)
};

const zh_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到用户`)
};

const ja_ranger_users_empty_title = /** @type {(inputs: Ranger_Users_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザーが見つかりません`)
};

/**
* | output |
* | --- |
* | "No users found" |
*
* @param {Ranger_Users_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_empty_title = /** @type {((inputs?: Ranger_Users_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_empty_title(inputs)
	if (locale === "de") return de_ranger_users_empty_title(inputs)
	if (locale === "fr") return fr_ranger_users_empty_title(inputs)
	if (locale === "it") return it_ranger_users_empty_title(inputs)
	if (locale === "nl") return nl_ranger_users_empty_title(inputs)
	if (locale === "pl") return pl_ranger_users_empty_title(inputs)
	if (locale === "pt") return pt_ranger_users_empty_title(inputs)
	if (locale === "ru") return ru_ranger_users_empty_title(inputs)
	if (locale === "sv") return sv_ranger_users_empty_title(inputs)
	if (locale === "tr") return tr_ranger_users_empty_title(inputs)
	if (locale === "zh") return zh_ranger_users_empty_title(inputs)
	if (locale === "ja") return ja_ranger_users_empty_title(inputs)
	return en_ranger_users_empty_title(inputs)
});
