/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Cartographer_HintInputs */

const en_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make a public kit that reaches 10 followers.`)
};

const es_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit público que llegue a 10 seguidores.`)
};

const de_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle ein öffentliches Kit, das 10 Follower erreicht.`)
};

const fr_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un kit public qui atteint 10 abonnés.`)
};

const it_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit pubblico che raggiunga 10 follower.`)
};

const nl_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een openbare kit die 10 volgers haalt.`)
};

const pl_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stwórz publiczny zestaw, który zdobędzie 10 obserwujących.`)
};

const pt_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um kit público que chegue a 10 seguidores.`)
};

const ru_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте публичный набор, у которого будет 10 подписчиков.`)
};

const sv_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör ett offentligt kit som når 10 följare.`)
};

const tr_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10 takipçiye ulaşan herkese açık bir kit yap.`)
};

const zh_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建一个关注者达到 10 人的公开合集。`)
};

const ja_profile_badge_cartographer_hint = /** @type {(inputs: Profile_Badge_Cartographer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワーが 10 人に達する公開キットを作る。`)
};

/**
* | output |
* | --- |
* | "Make a public kit that reaches 10 followers." |
*
* @param {Profile_Badge_Cartographer_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_cartographer_hint = /** @type {((inputs?: Profile_Badge_Cartographer_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Cartographer_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_cartographer_hint(inputs)
	if (locale === "de") return de_profile_badge_cartographer_hint(inputs)
	if (locale === "fr") return fr_profile_badge_cartographer_hint(inputs)
	if (locale === "it") return it_profile_badge_cartographer_hint(inputs)
	if (locale === "nl") return nl_profile_badge_cartographer_hint(inputs)
	if (locale === "pl") return pl_profile_badge_cartographer_hint(inputs)
	if (locale === "pt") return pt_profile_badge_cartographer_hint(inputs)
	if (locale === "ru") return ru_profile_badge_cartographer_hint(inputs)
	if (locale === "sv") return sv_profile_badge_cartographer_hint(inputs)
	if (locale === "tr") return tr_profile_badge_cartographer_hint(inputs)
	if (locale === "zh") return zh_profile_badge_cartographer_hint(inputs)
	if (locale === "ja") return ja_profile_badge_cartographer_hint(inputs)
	return en_profile_badge_cartographer_hint(inputs)
});
