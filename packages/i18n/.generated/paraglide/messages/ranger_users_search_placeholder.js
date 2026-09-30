/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Search_PlaceholderInputs */

const en_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle, name or email`)
};

const es_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario, nombre o email`)
};

const de_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle, Name oder E-Mail`)
};

const fr_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant, nom ou e-mail`)
};

const it_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle, nome o email`)
};

const nl_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle, naam of e-mail`)
};

const pl_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa użytkownika, imię lub e-mail`)
};

const pt_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário, nome ou e-mail`)
};

const ru_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ник, имя или email`)
};

const sv_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarnamn, namn eller e-post`)
};

const tr_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı adı, ad veya e-posta`)
};

const zh_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名、名称或邮箱`)
};

const ja_ranger_users_search_placeholder = /** @type {(inputs: Ranger_Users_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハンドル、名前、メールアドレス`)
};

/**
* | output |
* | --- |
* | "Handle, name or email" |
*
* @param {Ranger_Users_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_search_placeholder = /** @type {((inputs?: Ranger_Users_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_search_placeholder(inputs)
	if (locale === "de") return de_ranger_users_search_placeholder(inputs)
	if (locale === "fr") return fr_ranger_users_search_placeholder(inputs)
	if (locale === "it") return it_ranger_users_search_placeholder(inputs)
	if (locale === "nl") return nl_ranger_users_search_placeholder(inputs)
	if (locale === "pl") return pl_ranger_users_search_placeholder(inputs)
	if (locale === "pt") return pt_ranger_users_search_placeholder(inputs)
	if (locale === "ru") return ru_ranger_users_search_placeholder(inputs)
	if (locale === "sv") return sv_ranger_users_search_placeholder(inputs)
	if (locale === "tr") return tr_ranger_users_search_placeholder(inputs)
	if (locale === "zh") return zh_ranger_users_search_placeholder(inputs)
	if (locale === "ja") return ja_ranger_users_search_placeholder(inputs)
	return en_ranger_users_search_placeholder(inputs)
});
