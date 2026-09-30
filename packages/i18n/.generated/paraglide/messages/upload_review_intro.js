/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Review_IntroInputs */

const en_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last look before a ranger sees it. Fix the errors; warnings are advice.`)
};

const es_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último vistazo antes de que lo vea un guardabosques. Corrige los errores; los avisos son consejos.`)
};

const de_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein letzter Blick, bevor ein Ranger es sieht. Behebe die Fehler; Warnungen sind Tipps.`)
};

const fr_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un dernier coup d’œil avant qu’un ranger ne le voie. Corrigez les erreurs ; les avertissements sont des conseils.`)
};

const it_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ultimo sguardo prima che la veda un ranger. Correggi gli errori; gli avvisi sono consigli.`)
};

const nl_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een laatste blik voordat een ranger het ziet. Los de fouten op; waarschuwingen zijn tips.`)
};

const pl_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie spojrzenie, zanim zobaczy to strażnik. Popraw błędy; ostrzeżenia to wskazówki.`)
};

const pt_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma última olhada antes de um guarda ver. Corrija os erros; os avisos são dicas.`)
};

const ru_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последний взгляд перед тем, как это увидит рейнджер. Исправьте ошибки; предупреждения — это советы.`)
};

const sv_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En sista titt innan en ranger ser den. Rätta felen; varningarna är tips.`)
};

const tr_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir korucu görmeden önce son bir bakış. Hataları düzelt; uyarılar birer öneri.`)
};

const zh_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在护林员查看之前最后看一眼。请修正错误；警告只是建议。`)
};

const ja_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーが見る前の最終確認です。エラーを直しましょう。警告はアドバイスです。`)
};

/**
* | output |
* | --- |
* | "Last look before a ranger sees it. Fix the errors; warnings are advice." |
*
* @param {Upload_Review_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_review_intro = /** @type {((inputs?: Upload_Review_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Review_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_review_intro(inputs)
	if (locale === "de") return de_upload_review_intro(inputs)
	if (locale === "fr") return fr_upload_review_intro(inputs)
	if (locale === "it") return it_upload_review_intro(inputs)
	if (locale === "nl") return nl_upload_review_intro(inputs)
	if (locale === "pl") return pl_upload_review_intro(inputs)
	if (locale === "pt") return pt_upload_review_intro(inputs)
	if (locale === "ru") return ru_upload_review_intro(inputs)
	if (locale === "sv") return sv_upload_review_intro(inputs)
	if (locale === "tr") return tr_upload_review_intro(inputs)
	if (locale === "zh") return zh_upload_review_intro(inputs)
	if (locale === "ja") return ja_upload_review_intro(inputs)
	return en_upload_review_intro(inputs)
});
