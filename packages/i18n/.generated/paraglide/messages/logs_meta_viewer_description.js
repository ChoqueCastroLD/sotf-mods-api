/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Meta_Viewer_DescriptionInputs */

const en_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A shared game log. The private link deletes itself after 24 hours.`)
};

const es_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un log de juego compartido. El enlace privado se borra solo a las 24 horas.`)
};

const de_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein geteiltes Spiel-Log. Der private Link löscht sich nach 24 Stunden selbst.`)
};

const fr_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un log de jeu partagé. Le lien privé se supprime tout seul après 24 heures.`)
};

const it_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un log di gioco condiviso. Il link privato si cancella da solo dopo 24 ore.`)
};

const nl_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een gedeelde spellog. De privélink verwijdert zichzelf na 24 uur.`)
};

const pl_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępniony log z gry. Prywatny link sam usuwa się po 24 godzinach.`)
};

const pt_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um log de jogo partilhado. A ligação privada apaga-se sozinha ao fim de 24 horas.`)
};

const ru_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий игровой лог. Приватная ссылка удалится сама через 24 часа.`)
};

const sv_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En delad spellogg. Den privata länken raderas av sig själv efter 24 timmar.`)
};

const tr_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paylaşılan bir oyun logu. Özel bağlantı 24 saat sonra kendiliğinden silinir.`)
};

const zh_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一份共享的游戏日志。私密链接会在 24 小时后自动删除。`)
};

const ja_logs_meta_viewer_description = /** @type {(inputs: Logs_Meta_Viewer_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有されたゲームのログです。非公開リンクは 24 時間後に自動で削除されます。`)
};

/**
* | output |
* | --- |
* | "A shared game log. The private link deletes itself after 24 hours." |
*
* @param {Logs_Meta_Viewer_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_meta_viewer_description = /** @type {((inputs?: Logs_Meta_Viewer_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Meta_Viewer_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_meta_viewer_description(inputs)
	if (locale === "de") return de_logs_meta_viewer_description(inputs)
	if (locale === "fr") return fr_logs_meta_viewer_description(inputs)
	if (locale === "it") return it_logs_meta_viewer_description(inputs)
	if (locale === "nl") return nl_logs_meta_viewer_description(inputs)
	if (locale === "pl") return pl_logs_meta_viewer_description(inputs)
	if (locale === "pt") return pt_logs_meta_viewer_description(inputs)
	if (locale === "ru") return ru_logs_meta_viewer_description(inputs)
	if (locale === "sv") return sv_logs_meta_viewer_description(inputs)
	if (locale === "tr") return tr_logs_meta_viewer_description(inputs)
	if (locale === "zh") return zh_logs_meta_viewer_description(inputs)
	if (locale === "ja") return ja_logs_meta_viewer_description(inputs)
	return en_logs_meta_viewer_description(inputs)
});
