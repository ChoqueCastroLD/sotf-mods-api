/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Filter_Verified_AllInputs */

const en_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified or not`)
};

const es_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con o sin verificar`)
};

const de_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit oder ohne Verifizierung`)
};

const fr_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifié ou non`)
};

const it_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificato o no`)
};

const nl_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geverifieerd of niet`)
};

const pl_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikowani i nie`)
};

const pt_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificado ou não`)
};

const ru_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все, с проверкой и без`)
};

const sv_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifierad eller inte`)
};

const tr_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış veya değil`)
};

const zh_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不限`)
};

const ja_ranger_users_filter_verified_all = /** @type {(inputs: Ranger_Users_Filter_Verified_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証の有無を問わない`)
};

/**
* | output |
* | --- |
* | "Verified or not" |
*
* @param {Ranger_Users_Filter_Verified_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_filter_verified_all = /** @type {((inputs?: Ranger_Users_Filter_Verified_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Filter_Verified_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_filter_verified_all(inputs)
	if (locale === "de") return de_ranger_users_filter_verified_all(inputs)
	if (locale === "fr") return fr_ranger_users_filter_verified_all(inputs)
	if (locale === "it") return it_ranger_users_filter_verified_all(inputs)
	if (locale === "nl") return nl_ranger_users_filter_verified_all(inputs)
	if (locale === "pl") return pl_ranger_users_filter_verified_all(inputs)
	if (locale === "pt") return pt_ranger_users_filter_verified_all(inputs)
	if (locale === "ru") return ru_ranger_users_filter_verified_all(inputs)
	if (locale === "sv") return sv_ranger_users_filter_verified_all(inputs)
	if (locale === "tr") return tr_ranger_users_filter_verified_all(inputs)
	if (locale === "zh") return zh_ranger_users_filter_verified_all(inputs)
	if (locale === "ja") return ja_ranger_users_filter_verified_all(inputs)
	return en_ranger_users_filter_verified_all(inputs)
});
