/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Verified_HintInputs */

const en_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted creators publish right away when the checks pass and get higher limits.`)
};

const es_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los creadores de confianza publican al instante si las comprobaciones pasan y tienen límites mayores.`)
};

const de_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdige Creator veröffentlichen sofort, wenn die Prüfungen bestehen, und haben höhere Limits.`)
};

const fr_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les créateurs de confiance publient immédiatement si les contrôles passent et ont des limites plus élevées.`)
};

const it_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I creatori affidabili pubblicano subito se i controlli passano e hanno limiti più alti.`)
};

const nl_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwde makers publiceren direct als de controles slagen en hebben hogere limieten.`)
};

const pl_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufani twórcy publikują od razu, gdy kontrole przejdą, i mają wyższe limity.`)
};

const pt_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores confiáveis publicam na hora quando as verificações passam e têm limites maiores.`)
};

const ru_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенные авторы публикуют сразу, если проверки пройдены, и имеют повышенные лимиты.`)
};

const sv_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodda skapare publicerar direkt när kontrollerna går igenom och har högre gränser.`)
};

const tr_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir üreticiler kontroller geçince hemen yayımlar ve daha yüksek sınırlara sahiptir.`)
};

const zh_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信任的作者在检查通过后可立即发布，并享有更高的限额。`)
};

const ja_ranger_user_verified_hint = /** @type {(inputs: Ranger_User_Verified_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済みクリエイターはチェックに合格するとすぐに公開でき、上限も高くなります。`)
};

/**
* | output |
* | --- |
* | "Trusted creators publish right away when the checks pass and get higher limits." |
*
* @param {Ranger_User_Verified_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_verified_hint = /** @type {((inputs?: Ranger_User_Verified_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Verified_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_verified_hint(inputs)
	if (locale === "de") return de_ranger_user_verified_hint(inputs)
	if (locale === "fr") return fr_ranger_user_verified_hint(inputs)
	if (locale === "it") return it_ranger_user_verified_hint(inputs)
	if (locale === "nl") return nl_ranger_user_verified_hint(inputs)
	if (locale === "pl") return pl_ranger_user_verified_hint(inputs)
	if (locale === "pt") return pt_ranger_user_verified_hint(inputs)
	if (locale === "ru") return ru_ranger_user_verified_hint(inputs)
	if (locale === "sv") return sv_ranger_user_verified_hint(inputs)
	if (locale === "tr") return tr_ranger_user_verified_hint(inputs)
	if (locale === "zh") return zh_ranger_user_verified_hint(inputs)
	if (locale === "ja") return ja_ranger_user_verified_hint(inputs)
	return en_ranger_user_verified_hint(inputs)
});
