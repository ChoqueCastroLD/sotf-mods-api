/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_DescriptionInputs */

const en_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks from members who are not verified creators wait here until a moderator approves them.`)
};

const es_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los modpacks de miembros que no son creadores verificados esperan aquí hasta que un moderador los apruebe.`)
};

const de_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks von Mitgliedern, die keine verifizierten Creator sind, warten hier, bis ein Moderator sie freigibt.`)
};

const fr_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modpacks des membres qui ne sont pas créateurs vérifiés attendent ici qu’un modérateur les approuve.`)
};

const it_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I modpack dei membri che non sono creatori verificati restano qui finché un moderatore non li approva.`)
};

const nl_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks van leden die geen geverifieerde makers zijn, wachten hier tot een moderator ze goedkeurt.`)
};

const pl_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki członków, którzy nie są zweryfikowanymi twórcami, czekają tutaj, aż moderator je zatwierdzi.`)
};

const pt_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os modpacks de membros que não são criadores verificados aguardam aqui até que um moderador os aprove.`)
};

const ru_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки участников, которые не являются проверенными авторами, ждут здесь одобрения модератора.`)
};

const sv_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket från medlemmar som inte är verifierade skapare väntar här tills en moderator godkänner dem.`)
};

const tr_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmış içerik üreticisi olmayan üyelerin mod paketleri, bir moderatör onaylayana kadar burada bekler.`)
};

const zh_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非认证创作者的整合包会在此等待，直到版主批准。`)
};

const ja_modpacks_review_description = /** @type {(inputs: Modpacks_Review_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証クリエイターではないメンバーの Modパックは、モデレーターが承認するまでここで待機します。`)
};

/**
* | output |
* | --- |
* | "Modpacks from members who are not verified creators wait here until a moderator approves them." |
*
* @param {Modpacks_Review_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_description = /** @type {((inputs?: Modpacks_Review_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_description(inputs)
	if (locale === "de") return de_modpacks_review_description(inputs)
	if (locale === "fr") return fr_modpacks_review_description(inputs)
	if (locale === "it") return it_modpacks_review_description(inputs)
	if (locale === "nl") return nl_modpacks_review_description(inputs)
	if (locale === "pl") return pl_modpacks_review_description(inputs)
	if (locale === "pt") return pt_modpacks_review_description(inputs)
	if (locale === "ru") return ru_modpacks_review_description(inputs)
	if (locale === "sv") return sv_modpacks_review_description(inputs)
	if (locale === "tr") return tr_modpacks_review_description(inputs)
	if (locale === "zh") return zh_modpacks_review_description(inputs)
	if (locale === "ja") return ja_modpacks_review_description(inputs)
	return en_modpacks_review_description(inputs)
});
