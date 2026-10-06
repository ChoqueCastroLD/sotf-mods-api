/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Toast_FollowedInputs */

const en_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You now follow ${i?.name}. You’ll be notified of updates.`)
};

const es_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ahora sigues ${i?.name}. Te avisaremos de las actualizaciones.`)
};

const de_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst jetzt ${i?.name}. Du wirst über Updates benachrichtigt.`)
};

const fr_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous suivez maintenant ${i?.name}. Vous serez prévenu des mises à jour.`)
};

const it_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ora segui ${i?.name}. Ti avviseremo degli aggiornamenti.`)
};

const nl_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt nu ${i?.name}. Je krijgt bericht bij updates.`)
};

const pl_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obserwujesz ${i?.name}. Powiadomimy cię o aktualizacjach.`)
};

const pt_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você agora segue ${i?.name}. Vai ser avisado das atualizações.`)
};

const ru_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы подписались на ${i?.name}. Вы узнаете об обновлениях.`)
};

const sv_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer nu ${i?.name}. Du får besked om uppdateringar.`)
};

const tr_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} takip ediliyor. Güncellemelerden haberin olacak.`)
};

const zh_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已关注 ${i?.name}，有更新会通知你。`)
};

const ja_mod_toast_followed = /** @type {(inputs: Mod_Toast_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をフォローしました。更新があればお知らせします。`)
};

/**
* | output |
* | --- |
* | "You now follow {name}. You’ll be notified of updates." |
*
* @param {Mod_Toast_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_followed = /** @type {((inputs: Mod_Toast_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_followed(inputs)
	if (locale === "de") return de_mod_toast_followed(inputs)
	if (locale === "fr") return fr_mod_toast_followed(inputs)
	if (locale === "it") return it_mod_toast_followed(inputs)
	if (locale === "nl") return nl_mod_toast_followed(inputs)
	if (locale === "pl") return pl_mod_toast_followed(inputs)
	if (locale === "pt") return pt_mod_toast_followed(inputs)
	if (locale === "ru") return ru_mod_toast_followed(inputs)
	if (locale === "sv") return sv_mod_toast_followed(inputs)
	if (locale === "tr") return tr_mod_toast_followed(inputs)
	if (locale === "zh") return zh_mod_toast_followed(inputs)
	if (locale === "ja") return ja_mod_toast_followed(inputs)
	return en_mod_toast_followed(inputs)
});
