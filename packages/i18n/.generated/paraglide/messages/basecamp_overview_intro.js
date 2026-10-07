/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Overview_IntroInputs */

const en_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, followers and the work waiting for you across your mods.`)
};

const es_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas, seguidores y lo que está pendiente en tus mods.`)
};

const de_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, Follower und alles, was bei deinen Mods auf dich wartet.`)
};

const fr_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements, abonnés et ce qui attend votre attention sur vos mods.`)
};

const it_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download, follower e cose da fare sui tuoi mod.`)
};

const nl_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, volgers en wat er bij je mods op je wacht.`)
};

const pl_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania, obserwujący i sprawy czekające na ciebie w twoich modach.`)
};

const pt_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, seguidores e o que está à sua espera nos seus mods.`)
};

const ru_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки, подписчики и дела, которые ждут вас в ваших модах.`)
};

const sv_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar, följare och det som väntar på dig i dina moddar.`)
};

const tr_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarınızın indirmeleri, takipçileri ve sizi bekleyen işler.`)
};

const zh_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组的下载量、关注者和待处理的事项。`)
};

const ja_basecamp_overview_intro = /** @type {(inputs: Basecamp_Overview_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数、フォロワー数、MOD について対応が必要なことをまとめて確認できます。`)
};

/**
* | output |
* | --- |
* | "Downloads, followers and the work waiting for you across your mods." |
*
* @param {Basecamp_Overview_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_overview_intro = /** @type {((inputs?: Basecamp_Overview_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Overview_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_overview_intro(inputs)
	if (locale === "de") return de_basecamp_overview_intro(inputs)
	if (locale === "fr") return fr_basecamp_overview_intro(inputs)
	if (locale === "it") return it_basecamp_overview_intro(inputs)
	if (locale === "nl") return nl_basecamp_overview_intro(inputs)
	if (locale === "pl") return pl_basecamp_overview_intro(inputs)
	if (locale === "pt") return pt_basecamp_overview_intro(inputs)
	if (locale === "ru") return ru_basecamp_overview_intro(inputs)
	if (locale === "sv") return sv_basecamp_overview_intro(inputs)
	if (locale === "tr") return tr_basecamp_overview_intro(inputs)
	if (locale === "zh") return zh_basecamp_overview_intro(inputs)
	if (locale === "ja") return ja_basecamp_overview_intro(inputs)
	return en_basecamp_overview_intro(inputs)
});
