/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Onboarding_Follow_TextInputs */

const en_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following a mod pings you as soon as it updates.`)
};

const es_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si sigues un mod, te avisamos en cuanto se actualice.`)
};

const de_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wenn du einem Mod folgst, benachrichtigen wir dich, sobald er ein Update bekommt.`)
};

const fr_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre un mod vous prévient dès qu’il est mis à jour.`)
};

const it_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se segui una mod, ti avvisiamo appena si aggiorna.`)
};

const nl_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg je een mod, dan krijg je een seintje zodra hij een update krijgt.`)
};

const pl_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdy obserwujesz moda, powiadomimy cię, gdy tylko dostanie aktualizację.`)
};

const pt_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao seguir um mod, você recebe um aviso assim que ele for atualizado.`)
};

const ru_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписавшись на мод, вы узнаете о его обновлении сразу же.`)
};

const sv_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer du en modd får du en signal så fort den uppdateras.`)
};

const tr_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu takip edersen, güncellendiği anda haber verilir.`)
};

const zh_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注模组后，它一更新你就会收到提醒。`)
};

const ja_auth_onboarding_follow_text = /** @type {(inputs: Auth_Onboarding_Follow_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD をフォローすると、更新されたときにすぐお知らせします。`)
};

/**
* | output |
* | --- |
* | "Following a mod pings you as soon as it updates." |
*
* @param {Auth_Onboarding_Follow_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_onboarding_follow_text = /** @type {((inputs?: Auth_Onboarding_Follow_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Follow_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_onboarding_follow_text(inputs)
	if (locale === "de") return de_auth_onboarding_follow_text(inputs)
	if (locale === "fr") return fr_auth_onboarding_follow_text(inputs)
	if (locale === "it") return it_auth_onboarding_follow_text(inputs)
	if (locale === "nl") return nl_auth_onboarding_follow_text(inputs)
	if (locale === "pl") return pl_auth_onboarding_follow_text(inputs)
	if (locale === "pt") return pt_auth_onboarding_follow_text(inputs)
	if (locale === "ru") return ru_auth_onboarding_follow_text(inputs)
	if (locale === "sv") return sv_auth_onboarding_follow_text(inputs)
	if (locale === "tr") return tr_auth_onboarding_follow_text(inputs)
	if (locale === "zh") return zh_auth_onboarding_follow_text(inputs)
	if (locale === "ja") return ja_auth_onboarding_follow_text(inputs)
	return en_auth_onboarding_follow_text(inputs)
});
