/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_OutrankedInputs */

const en_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers can only act on accounts below their own role.`)
};

const es_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los rangers solo pueden actuar sobre cuentas con un rol inferior al suyo.`)
};

const de_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger können nur Konten unterhalb ihrer eigenen Rolle bearbeiten.`)
};

const fr_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rangers n’agissent que sur des comptes de rôle inférieur au leur.`)
};

const it_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I ranger possono agire solo su account con un ruolo inferiore al proprio.`)
};

const nl_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers kunnen alleen optreden tegen accounts met een lagere rol dan hun eigen rol.`)
};

const pl_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerzy mogą działać tylko na kontach z niższą rolą niż ich własna.`)
};

const pt_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers só podem agir sobre contas com papel abaixo do seu.`)
};

const ru_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджеры могут действовать только в отношении аккаунтов с ролью ниже своей.`)
};

const sv_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers kan bara agera på konton med lägre roll än den egna.`)
};

const tr_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger’lar yalnızca kendi rollerinin altındaki hesaplara işlem yapabilir.`)
};

const zh_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`巡林员只能处理角色低于自己的账号。`)
};

const ja_ranger_user_outranked = /** @type {(inputs: Ranger_User_OutrankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーは自分より下のロールのアカウントにのみ操作できます。`)
};

/**
* | output |
* | --- |
* | "Rangers can only act on accounts below their own role." |
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
