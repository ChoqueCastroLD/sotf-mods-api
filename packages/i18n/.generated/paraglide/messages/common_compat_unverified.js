/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Compat_UnverifiedInputs */

const en_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not verified on the latest patch yet. Tried it? Report back.`)
};

const es_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin verificar en el último parche. ¿Lo probaste? Cuéntanos.`)
};

const de_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit dem neuesten Patch noch nicht geprüft. Ausprobiert? Gib Bescheid.`)
};

const fr_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore vérifié sur le dernier patch. Vous l’avez essayé ? Dites-le-nous.`)
};

const it_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ancora verificata sull’ultima patch. L’hai provata? Faccelo sapere.`)
};

const nl_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niet gecontroleerd op de nieuwste patch. Geprobeerd? Laat het weten.`)
};

const pl_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze niesprawdzony na najnowszym patchu. Testowałeś? Daj znać.`)
};

const pt_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não verificado no último patch. Testou? Conta pra gente.`)
};

const ru_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На последнем патче ещё не проверено. Пробовали? Расскажите нам.`)
};

const sv_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte verifierad på senaste patchen än. Har du testat? Hör av dig.`)
};

const tr_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son yamada henüz doğrulanmadı. Denedin mi? Bize haber ver.`)
};

const zh_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未在最新补丁上验证。试过了吗？告诉我们结果。`)
};

const ja_common_compat_unverified = /** @type {(inputs: Common_Compat_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新パッチではまだ確認されていません。試しましたか？結果を教えてください。`)
};

/**
* | output |
* | --- |
* | "Not verified on the latest patch yet. Tried it? Report back." |
*
* @param {Common_Compat_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_compat_unverified = /** @type {((inputs?: Common_Compat_UnverifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Compat_UnverifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_compat_unverified(inputs)
	if (locale === "de") return de_common_compat_unverified(inputs)
	if (locale === "fr") return fr_common_compat_unverified(inputs)
	if (locale === "it") return it_common_compat_unverified(inputs)
	if (locale === "nl") return nl_common_compat_unverified(inputs)
	if (locale === "pl") return pl_common_compat_unverified(inputs)
	if (locale === "pt") return pt_common_compat_unverified(inputs)
	if (locale === "ru") return ru_common_compat_unverified(inputs)
	if (locale === "sv") return sv_common_compat_unverified(inputs)
	if (locale === "tr") return tr_common_compat_unverified(inputs)
	if (locale === "zh") return zh_common_compat_unverified(inputs)
	if (locale === "ja") return ja_common_compat_unverified(inputs)
	return en_common_compat_unverified(inputs)
});
