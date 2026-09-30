/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Principle_PrivacyInputs */

const en_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can hide your rank and activity in your privacy settings.`)
};

const es_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puedes ocultar tu rango y tu actividad en los ajustes de privacidad.`)
};

const de_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst Rang und Aktivität in deinen Privatsphäre-Einstellungen ausblenden.`)
};

const fr_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez masquer votre rang et votre activité dans vos paramètres de confidentialité.`)
};

const it_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi nascondere grado e attività nelle impostazioni della privacy.`)
};

const nl_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt je rang en activiteit verbergen in je privacyinstellingen.`)
};

const pl_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangę i aktywność możesz ukryć w ustawieniach prywatności.`)
};

const pt_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você pode ocultar sua patente e sua atividade nas configurações de privacidade.`)
};

const ru_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ранг и активность можно скрыть в настройках приватности.`)
};

const sv_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan dölja din rang och aktivitet i dina sekretessinställningar.`)
};

const tr_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rütbeni ve etkinliğini gizlilik ayarlarından gizleyebilirsin.`)
};

const zh_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你可以在隐私设置中隐藏自己的等级和动态。`)
};

const ja_profile_achievements_principle_privacy = /** @type {(inputs: Profile_Achievements_Principle_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ランクとアクティビティはプライバシー設定で非表示にできます。`)
};

/**
* | output |
* | --- |
* | "You can hide your rank and activity in your privacy settings." |
*
* @param {Profile_Achievements_Principle_PrivacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_principle_privacy = /** @type {((inputs?: Profile_Achievements_Principle_PrivacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_PrivacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_principle_privacy(inputs)
	if (locale === "de") return de_profile_achievements_principle_privacy(inputs)
	if (locale === "fr") return fr_profile_achievements_principle_privacy(inputs)
	if (locale === "it") return it_profile_achievements_principle_privacy(inputs)
	if (locale === "nl") return nl_profile_achievements_principle_privacy(inputs)
	if (locale === "pl") return pl_profile_achievements_principle_privacy(inputs)
	if (locale === "pt") return pt_profile_achievements_principle_privacy(inputs)
	if (locale === "ru") return ru_profile_achievements_principle_privacy(inputs)
	if (locale === "sv") return sv_profile_achievements_principle_privacy(inputs)
	if (locale === "tr") return tr_profile_achievements_principle_privacy(inputs)
	if (locale === "zh") return zh_profile_achievements_principle_privacy(inputs)
	if (locale === "ja") return ja_profile_achievements_principle_privacy(inputs)
	return en_profile_achievements_principle_privacy(inputs)
});
