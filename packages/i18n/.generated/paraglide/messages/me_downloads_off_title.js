/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Off_TitleInputs */

const en_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your download history is off`)
};

const es_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu historial de descargas está desactivado`)
};

const de_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Download-Verlauf ist aus`)
};

const fr_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre historique des téléchargements est désactivé`)
};

const it_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La cronologia dei download è disattivata`)
};

const nl_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je downloadgeschiedenis staat uit`)
};

const pl_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja historia pobrań jest wyłączona`)
};

const pt_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu histórico de downloads está desativado`)
};

const ru_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок выключена`)
};

const sv_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din nedladdningshistorik är avstängd`)
};

const tr_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişin kapalı`)
};

const zh_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的下载记录已关闭`)
};

const ja_me_downloads_off_title = /** @type {(inputs: Me_Downloads_Off_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴はオフです`)
};

/**
* | output |
* | --- |
* | "Your download history is off" |
*
* @param {Me_Downloads_Off_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_off_title = /** @type {((inputs?: Me_Downloads_Off_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Off_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_off_title(inputs)
	if (locale === "de") return de_me_downloads_off_title(inputs)
	if (locale === "fr") return fr_me_downloads_off_title(inputs)
	if (locale === "it") return it_me_downloads_off_title(inputs)
	if (locale === "nl") return nl_me_downloads_off_title(inputs)
	if (locale === "pl") return pl_me_downloads_off_title(inputs)
	if (locale === "pt") return pt_me_downloads_off_title(inputs)
	if (locale === "ru") return ru_me_downloads_off_title(inputs)
	if (locale === "sv") return sv_me_downloads_off_title(inputs)
	if (locale === "tr") return tr_me_downloads_off_title(inputs)
	if (locale === "zh") return zh_me_downloads_off_title(inputs)
	if (locale === "ja") return ja_me_downloads_off_title(inputs)
	return en_me_downloads_off_title(inputs)
});
