/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Conflict_DetailInputs */

const en_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone changed this meanwhile. The page has the latest version now: check it and try again.`)
};

const es_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien lo cambió mientras tanto. La página ya muestra la última versión: revísala y vuelve a intentarlo.`)
};

const de_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat das inzwischen geändert. Die Seite zeigt jetzt den neuesten Stand: prüfe ihn und versuche es erneut.`)
};

const fr_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un l’a modifié entre-temps. La page affiche maintenant la dernière version : vérifiez-la et réessayez.`)
};

const it_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno l’ha modificata nel frattempo. La pagina mostra ora l’ultima versione: controllala e riprova.`)
};

const nl_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft dit intussen gewijzigd. De pagina toont nu de nieuwste versie: controleer die en probeer het opnieuw.`)
};

const pl_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś to w międzyczasie zmienił. Strona pokazuje już najnowszą wersję: sprawdź ją i spróbuj ponownie.`)
};

const pt_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém alterou isso enquanto isso. A página já mostra a versão mais recente: confira e tente de novo.`)
};

const ru_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то изменил это тем временем. Страница уже показывает последнюю версию: проверьте её и попробуйте снова.`)
};

const sv_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon ändrade detta under tiden. Sidan visar nu den senaste versionen: kontrollera den och försök igen.`)
};

const tr_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu arada biri bunu değiştirdi. Sayfa artık en son sürümü gösteriyor: kontrol et ve yeniden dene.`)
};

const zh_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人在此期间修改了它。页面已显示最新版本：请检查后重试。`)
};

const ja_basecamp_conflict_detail = /** @type {(inputs: Basecamp_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その間に誰かが変更しました。ページには最新の内容が表示されています。確認してからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Someone changed this meanwhile. The page has the latest version now: check it and try again." |
*
* @param {Basecamp_Conflict_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_conflict_detail = /** @type {((inputs?: Basecamp_Conflict_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Conflict_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_conflict_detail(inputs)
	if (locale === "de") return de_basecamp_conflict_detail(inputs)
	if (locale === "fr") return fr_basecamp_conflict_detail(inputs)
	if (locale === "it") return it_basecamp_conflict_detail(inputs)
	if (locale === "nl") return nl_basecamp_conflict_detail(inputs)
	if (locale === "pl") return pl_basecamp_conflict_detail(inputs)
	if (locale === "pt") return pt_basecamp_conflict_detail(inputs)
	if (locale === "ru") return ru_basecamp_conflict_detail(inputs)
	if (locale === "sv") return sv_basecamp_conflict_detail(inputs)
	if (locale === "tr") return tr_basecamp_conflict_detail(inputs)
	if (locale === "zh") return zh_basecamp_conflict_detail(inputs)
	if (locale === "ja") return ja_basecamp_conflict_detail(inputs)
	return en_basecamp_conflict_detail(inputs)
});
