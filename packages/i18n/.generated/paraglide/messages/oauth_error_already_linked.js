/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_Already_LinkedInputs */

const en_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That Discord account is already linked to another user.`)
};

const es_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa cuenta de Discord ya está vinculada a otro usuario.`)
};

const de_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Discord-Konto ist bereits mit einem anderen Benutzer verknüpft.`)
};

const fr_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce compte Discord est déjà lié à un autre utilisateur.`)
};

const it_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quell’account Discord è già collegato a un altro utente.`)
};

const nl_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat Discord-account is al gekoppeld aan een andere gebruiker.`)
};

const pl_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To konto Discord jest już połączone z innym użytkownikiem.`)
};

const pt_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essa conta do Discord já está vinculada a outro usuário.`)
};

const ru_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот аккаунт Discord уже привязан к другому пользователю.`)
};

const sv_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det Discord-kontot är redan kopplat till en annan användare.`)
};

const tr_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu Discord hesabı zaten başka bir kullanıcıya bağlı.`)
};

const zh_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该 Discord 账号已关联到其他用户。`)
};

const ja_oauth_error_already_linked = /** @type {(inputs: Oauth_Error_Already_LinkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その Discord アカウントは既に別のユーザーに連携されています。`)
};

/**
* | output |
* | --- |
* | "That Discord account is already linked to another user." |
*
* @param {Oauth_Error_Already_LinkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_already_linked = /** @type {((inputs?: Oauth_Error_Already_LinkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Already_LinkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_already_linked(inputs)
	if (locale === "de") return de_oauth_error_already_linked(inputs)
	if (locale === "fr") return fr_oauth_error_already_linked(inputs)
	if (locale === "it") return it_oauth_error_already_linked(inputs)
	if (locale === "nl") return nl_oauth_error_already_linked(inputs)
	if (locale === "pl") return pl_oauth_error_already_linked(inputs)
	if (locale === "pt") return pt_oauth_error_already_linked(inputs)
	if (locale === "ru") return ru_oauth_error_already_linked(inputs)
	if (locale === "sv") return sv_oauth_error_already_linked(inputs)
	if (locale === "tr") return tr_oauth_error_already_linked(inputs)
	if (locale === "zh") return zh_oauth_error_already_linked(inputs)
	if (locale === "ja") return ja_oauth_error_already_linked(inputs)
	return en_oauth_error_already_linked(inputs)
});
