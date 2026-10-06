/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_OutrankedInputs */

const en_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators can only act on accounts below their own role.`)
};

const es_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los moderadores solo pueden actuar sobre cuentas con un rol inferior al suyo.`)
};

const de_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatoren können nur Konten unterhalb ihrer eigenen Rolle bearbeiten.`)
};

const fr_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modérateurs n’agissent que sur des comptes de rôle inférieur au leur.`)
};

const it_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I moderatori possono agire solo su account con un ruolo inferiore al proprio.`)
};

const nl_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators kunnen alleen optreden tegen accounts met een lagere rol dan hun eigen rol.`)
};

const pl_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorzy mogą działać tylko na kontach z niższą rolą niż ich własna.`)
};

const pt_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderadores só podem agir sobre contas com papel abaixo do seu.`)
};

const ru_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модераторы могут действовать только в отношении аккаунтов с ролью ниже своей.`)
};

const sv_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorer kan bara agera på konton med lägre roll än den egna.`)
};

const tr_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörler yalnızca kendi rollerinin altındaki hesaplara işlem yapabilir.`)
};

const zh_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主只能处理角色低于自己的账号。`)
};

const ja_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターは自分より下のロールのアカウントにのみ操作できます。`)
};

/**
* | output |
* | --- |
* | "Moderators can only act on accounts below their own role." |
*
* @param {Ranger_User_OutrankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_outranked = /** @type {((inputs?: Ranger_User_OutrankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_OutrankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_outranked(inputs)
	if (locale === "de") return de_ranger_user_outranked(inputs)
	if (locale === "fr") return fr_ranger_user_outranked(inputs)
	if (locale === "it") return it_ranger_user_outranked(inputs)
	if (locale === "nl") return nl_ranger_user_outranked(inputs)
	if (locale === "pl") return pl_ranger_user_outranked(inputs)
	if (locale === "pt") return pt_ranger_user_outranked(inputs)
	if (locale === "ru") return ru_ranger_user_outranked(inputs)
	if (locale === "sv") return sv_ranger_user_outranked(inputs)
	if (locale === "tr") return tr_ranger_user_outranked(inputs)
	if (locale === "zh") return zh_ranger_user_outranked(inputs)
	if (locale === "ja") return ja_ranger_user_outranked(inputs)
	return en_ranger_user_outranked(inputs)
});
