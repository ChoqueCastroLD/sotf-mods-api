/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Error_TextInputs */

const en_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t load the compatibility data. Try again in a minute; if it keeps failing, tell us on Discord with the reference below.`)
};

const es_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos cargar los datos de compatibilidad. Inténtalo de nuevo en un minuto; si sigue fallando, avísanos en Discord con la referencia de abajo.`)
};

const de_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kompatibilitätsdaten konnten nicht geladen werden. Versuch es in einer Minute erneut; wenn es weiter fehlschlägt, sag uns auf Discord mit der Referenz unten Bescheid.`)
};

const fr_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les données de compatibilité. Réessayez dans une minute ; si le problème persiste, prévenez-nous sur Discord avec la référence ci-dessous.`)
};

const it_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non siamo riusciti a caricare i dati di compatibilità. Riprova tra un minuto; se continua a non funzionare, avvisaci su Discord con il riferimento qui sotto.`)
};

const nl_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden de compatibiliteitsgegevens niet laden. Probeer het over een minuut opnieuw; blijft het misgaan, laat het ons dan weten op Discord met de referentie hieronder.`)
};

const pl_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać danych o zgodności. Spróbuj ponownie za minutę; jeśli błąd się powtarza, daj nam znać na Discordzie, podając poniższy numer referencyjny.`)
};

const pt_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos carregar os dados de compatibilidade. Tente de novo em um minuto; se continuar falhando, avise a gente no Discord com a referência abaixo.`)
};

const ru_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить данные о совместимости. Попробуйте ещё раз через минуту; если ошибка повторяется, напишите нам в Discord и укажите код ниже.`)
};

const sv_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte läsa in kompatibilitetsdatan. Försök igen om en minut; fortsätter det att strula, säg till på Discord med referensen nedan.`)
};

const tr_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk verilerini yükleyemedik. Bir dakika sonra tekrar dene; sorun sürerse aşağıdaki referansla Discord’da bize haber ver.`)
};

const zh_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载兼容性数据。请一分钟后重试；如果仍然失败，请在 Discord 告诉我们并附上下面的参考编号。`)
};

const ja_content_radar_error_text = /** @type {(inputs: Content_Radar_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性データを読み込めませんでした。1 分後にもう一度お試しください。問題が続く場合は、下の参照番号を添えて Discord でお知らせください。`)
};

/**
* | output |
* | --- |
* | "We couldn’t load the compatibility data. Try again in a minute; if it keeps failing, tell us on Discord with the reference below." |
*
* @param {Content_Radar_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_error_text = /** @type {((inputs?: Content_Radar_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_error_text(inputs)
	if (locale === "de") return de_content_radar_error_text(inputs)
	if (locale === "fr") return fr_content_radar_error_text(inputs)
	if (locale === "it") return it_content_radar_error_text(inputs)
	if (locale === "nl") return nl_content_radar_error_text(inputs)
	if (locale === "pl") return pl_content_radar_error_text(inputs)
	if (locale === "pt") return pt_content_radar_error_text(inputs)
	if (locale === "ru") return ru_content_radar_error_text(inputs)
	if (locale === "sv") return sv_content_radar_error_text(inputs)
	if (locale === "tr") return tr_content_radar_error_text(inputs)
	if (locale === "zh") return zh_content_radar_error_text(inputs)
	if (locale === "ja") return ja_content_radar_error_text(inputs)
	return en_content_radar_error_text(inputs)
});
