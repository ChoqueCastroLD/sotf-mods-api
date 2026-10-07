/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Empty_FilteredInputs */

const en_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No user matches the filters.`)
};

const es_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún usuario coincide con los filtros.`)
};

const de_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Benutzer passt zu den Filtern.`)
};

const fr_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun utilisateur ne correspond aux filtres.`)
};

const it_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun utente corrisponde ai filtri.`)
};

const nl_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen enkele gebruiker komt overeen met de filters.`)
};

const pl_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden użytkownik nie pasuje do filtrów.`)
};

const pt_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum usuário corresponde aos filtros.`)
};

const ru_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет пользователей по выбранным фильтрам.`)
};

const sv_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen användare matchar filtren.`)
};

const tr_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrelere uyan kullanıcı yok.`)
};

const zh_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合筛选条件的用户。`)
};

const ja_ranger_users_empty_filtered = /** @type {(inputs: Ranger_Users_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターに合うユーザーはいません。`)
};

/**
* | output |
* | --- |
* | "No user matches the filters." |
*
* @param {Ranger_Users_Empty_FilteredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_empty_filtered = /** @type {((inputs?: Ranger_Users_Empty_FilteredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Empty_FilteredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_empty_filtered(inputs)
	if (locale === "de") return de_ranger_users_empty_filtered(inputs)
	if (locale === "fr") return fr_ranger_users_empty_filtered(inputs)
	if (locale === "it") return it_ranger_users_empty_filtered(inputs)
	if (locale === "nl") return nl_ranger_users_empty_filtered(inputs)
	if (locale === "pl") return pl_ranger_users_empty_filtered(inputs)
	if (locale === "pt") return pt_ranger_users_empty_filtered(inputs)
	if (locale === "ru") return ru_ranger_users_empty_filtered(inputs)
	if (locale === "sv") return sv_ranger_users_empty_filtered(inputs)
	if (locale === "tr") return tr_ranger_users_empty_filtered(inputs)
	if (locale === "zh") return zh_ranger_users_empty_filtered(inputs)
	if (locale === "ja") return ja_ranger_users_empty_filtered(inputs)
	return en_ranger_users_empty_filtered(inputs)
});
