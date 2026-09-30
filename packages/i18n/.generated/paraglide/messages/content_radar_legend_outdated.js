/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Legend_OutdatedInputs */

const en_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Possibly outdated” means the latest release predates the last breaking update and nobody has confirmed it works since.`)
};

const es_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«Posiblemente desactualizado» significa que la última versión es anterior a la última actualización que rompe mods y nadie ha confirmado que funcione desde entonces.`)
};

const de_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`„Möglicherweise veraltet“ heißt: Die neueste Version ist älter als das letzte Update mit Brüchen, und seitdem hat niemand bestätigt, dass sie funktioniert.`)
};

const fr_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`« Peut-être obsolète » signifie que la dernière version est antérieure à la dernière mise à jour cassante et que personne n’a confirmé qu’elle fonctionne depuis.`)
};

const it_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«Forse obsoleta» significa che l’ultima versione è precedente all’ultimo aggiornamento che rompe le mod e nessuno ha confermato che funzioni da allora.`)
};

const nl_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`‘Mogelijk verouderd’ betekent dat de nieuwste versie ouder is dan de laatste update die mods breekt en dat sindsdien niemand heeft bevestigd dat hij werkt.`)
};

const pl_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`„Możliwie nieaktualny” oznacza, że najnowsza wersja jest starsza niż ostatnia aktualizacja psująca mody i od tego czasu nikt nie potwierdził, że działa.`)
};

const pt_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Possivelmente desatualizado” significa que a versão mais recente é anterior à última atualização que quebra mods e ninguém confirmou que ela funciona desde então.`)
};

const ru_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«Возможно, устарел» означает, что последняя версия вышла раньше последнего ломающего обновления и с тех пор никто не подтвердил, что она работает.`)
};

const sv_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`”Kanske inaktuell” betyder att den senaste versionen är äldre än den senaste uppdateringen som bryter moddar och att ingen har bekräftat att den fungerar sedan dess.`)
};

const tr_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Güncelliğini yitirmiş olabilir”, en son sürümün modları bozan son güncellemeden eski olduğu ve o zamandan beri kimsenin çalıştığını doğrulamadığı anlamına gelir.`)
};

const zh_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“可能已过时”表示最新版本早于最近一次破坏性更新，且此后没有人确认它可用。`)
};

const ja_content_radar_legend_outdated = /** @type {(inputs: Content_Radar_Legend_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「古い可能性あり」は、最新版が直近の互換性を壊すアップデートより前のもので、その後に動作を確認した人がいないことを意味します。`)
};

/**
* | output |
* | --- |
* | "“Possibly outdated” means the latest release predates the last breaking update and nobody has confirmed it works since." |
*
* @param {Content_Radar_Legend_OutdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_legend_outdated = /** @type {((inputs?: Content_Radar_Legend_OutdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Legend_OutdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_legend_outdated(inputs)
	if (locale === "de") return de_content_radar_legend_outdated(inputs)
	if (locale === "fr") return fr_content_radar_legend_outdated(inputs)
	if (locale === "it") return it_content_radar_legend_outdated(inputs)
	if (locale === "nl") return nl_content_radar_legend_outdated(inputs)
	if (locale === "pl") return pl_content_radar_legend_outdated(inputs)
	if (locale === "pt") return pt_content_radar_legend_outdated(inputs)
	if (locale === "ru") return ru_content_radar_legend_outdated(inputs)
	if (locale === "sv") return sv_content_radar_legend_outdated(inputs)
	if (locale === "tr") return tr_content_radar_legend_outdated(inputs)
	if (locale === "zh") return zh_content_radar_legend_outdated(inputs)
	if (locale === "ja") return ja_content_radar_legend_outdated(inputs)
	return en_content_radar_legend_outdated(inputs)
});
