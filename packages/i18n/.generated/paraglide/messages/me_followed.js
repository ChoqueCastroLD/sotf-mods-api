/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_FollowedInputs */

const en_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You now follow ${i?.mod}`)
};

const es_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ahora sigues ${i?.mod}`)
};

const de_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst jetzt ${i?.mod}`)
};

const fr_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous suivez maintenant ${i?.mod}`)
};

const it_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ora segui ${i?.mod}`)
};

const nl_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt nu ${i?.mod}`)
};

const pl_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwujesz teraz ${i?.mod}`)
};

const pt_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Agora você segue ${i?.mod}`)
};

const ru_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы подписались на ${i?.mod}`)
};

const sv_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer nu ${i?.mod}`)
};

const tr_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Artık ${i?.mod} modunu takip ediyorsun`)
};

const zh_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已关注 ${i?.mod}`)
};

const ja_me_followed = /** @type {(inputs: Me_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} をフォローしました`)
};

/**
* | output |
* | --- |
* | "You now follow {mod}" |
*
* @param {Me_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_followed = /** @type {((inputs: Me_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_followed(inputs)
	if (locale === "de") return de_me_followed(inputs)
	if (locale === "fr") return fr_me_followed(inputs)
	if (locale === "it") return it_me_followed(inputs)
	if (locale === "nl") return nl_me_followed(inputs)
	if (locale === "pl") return pl_me_followed(inputs)
	if (locale === "pt") return pt_me_followed(inputs)
	if (locale === "ru") return ru_me_followed(inputs)
	if (locale === "sv") return sv_me_followed(inputs)
	if (locale === "tr") return tr_me_followed(inputs)
	if (locale === "zh") return zh_me_followed(inputs)
	if (locale === "ja") return ja_me_followed(inputs)
	return en_me_followed(inputs)
});
