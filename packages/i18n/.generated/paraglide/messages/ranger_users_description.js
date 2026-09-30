/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_DescriptionInputs */

const en_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by handle, name or email. Open a user to see their history and sanctions.`)
};

const es_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca por usuario, nombre o email. Abre un usuario para ver su historial y sus sanciones.`)
};

const de_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche nach Handle, Name oder E-Mail. Öffne einen Benutzer, um Verlauf und Sanktionen zu sehen.`)
};

const fr_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherchez par identifiant, nom ou e-mail. Ouvrez un utilisateur pour voir son historique et ses sanctions.`)
};

const it_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per handle, nome o email. Apri un utente per vederne lo storico e le sanzioni.`)
};

const nl_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek op handle, naam of e-mail. Open een gebruiker om de geschiedenis en sancties te zien.`)
};

const pl_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj po nazwie użytkownika, imieniu lub e-mailu. Otwórz użytkownika, aby zobaczyć historię i sankcje.`)
};

const pt_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque por usuário, nome ou e-mail. Abra um usuário para ver o histórico e as sanções.`)
};

const ru_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите по нику, имени или email. Откройте пользователя, чтобы увидеть историю и санкции.`)
};

const sv_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på användarnamn, namn eller e-post. Öppna en användare för att se historik och sanktioner.`)
};

const tr_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı adı, ad veya e-postayla arayın. Geçmişini ve yaptırımlarını görmek için bir kullanıcı açın.`)
};

const zh_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按用户名、名称或邮箱搜索。打开用户可查看其记录和处罚。`)
};

const ja_ranger_users_description = /** @type {(inputs: Ranger_Users_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハンドル、名前、メールアドレスで検索します。ユーザーを開くと履歴と制裁を確認できます。`)
};

/**
* | output |
* | --- |
* | "Search by handle, name or email. Open a user to see their history and sanctions." |
*
* @param {Ranger_Users_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_description = /** @type {((inputs?: Ranger_Users_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_description(inputs)
	if (locale === "de") return de_ranger_users_description(inputs)
	if (locale === "fr") return fr_ranger_users_description(inputs)
	if (locale === "it") return it_ranger_users_description(inputs)
	if (locale === "nl") return nl_ranger_users_description(inputs)
	if (locale === "pl") return pl_ranger_users_description(inputs)
	if (locale === "pt") return pt_ranger_users_description(inputs)
	if (locale === "ru") return ru_ranger_users_description(inputs)
	if (locale === "sv") return sv_ranger_users_description(inputs)
	if (locale === "tr") return tr_ranger_users_description(inputs)
	if (locale === "zh") return zh_ranger_users_description(inputs)
	if (locale === "ja") return ja_ranger_users_description(inputs)
	return en_ranger_users_description(inputs)
});
