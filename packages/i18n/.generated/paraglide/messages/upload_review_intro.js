/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Review_IntroInputs */

const en_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last check before moderation reviews it. Fix the errors; warnings are only advice.`)
};

const es_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última comprobación antes de que moderación lo revise. Corrige los errores; los avisos son solo consejos.`)
};

const de_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein letzter Check, bevor die Moderation es prüft. Behebe die Fehler; Warnungen sind nur Tipps.`)
};

const fr_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un dernier contrôle avant l’examen par la modération. Corrigez les erreurs ; les avertissements ne sont que des conseils.`)
};

const it_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ultimo controllo prima che la moderazione la esamini. Correggi gli errori; gli avvisi sono solo consigli.`)
};

const nl_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een laatste controle voordat moderatie ernaar kijkt. Los de fouten op; waarschuwingen zijn alleen tips.`)
};

const pl_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie sprawdzenie, zanim przejrzy to moderacja. Popraw błędy; ostrzeżenia to tylko wskazówki.`)
};

const pt_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma última verificação antes de a moderação revisar. Corrija os erros; os avisos são só dicas.`)
};

const ru_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя проверка перед тем, как это рассмотрит модерация. Исправьте ошибки; предупреждения только советуют.`)
};

const sv_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En sista kontroll innan modereringen granskar den. Rätta felen; varningarna är bara tips.`)
};

const tr_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon incelemeden önce son bir kontrol. Hataları düzelt; uyarılar yalnızca öneridir.`)
};

const zh_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交审核前的最后检查。请修正错误；警告只是建议。`)
};

const ja_upload_review_intro = /** @type {(inputs: Upload_Review_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションが確認する前の最終チェックです。エラーを直しましょう。警告はアドバイスです。`)
};

/**
* | output |
* | --- |
* | "Last check before moderation reviews it. Fix the errors; warnings are only advice." |
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
