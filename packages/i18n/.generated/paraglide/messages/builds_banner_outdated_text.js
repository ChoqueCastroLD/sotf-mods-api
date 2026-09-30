/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Outdated_TextInputs */

const en_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This build hasn’t been updated in a long time. It may not place correctly on the current patch.`)
};

const es_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta build lleva mucho tiempo sin actualizarse. Puede que no se coloque bien en el parche actual.`)
};

const de_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Build wurde lange nicht aktualisiert. Auf dem aktuellen Patch lässt er sich eventuell nicht richtig platzieren.`)
};

const fr_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette build n’a pas été mise à jour depuis longtemps. Elle risque de mal se placer sur le patch actuel.`)
};

const it_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa build non viene aggiornata da molto tempo. Potrebbe non piazzarsi bene con la patch attuale.`)
};

const nl_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze build is al lang niet bijgewerkt. Op de huidige patch wordt hij misschien niet goed geplaatst.`)
};

const pl_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten build od dawna nie był aktualizowany. Na obecnej łatce może nie stawiać się poprawnie.`)
};

const pt_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta build não é atualizada há muito tempo. Ela pode não ser posicionada direito no patch atual.`)
};

const ru_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эту постройку давно не обновляли. На текущем патче она может ставиться неправильно.`)
};

const sv_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygget har inte uppdaterats på länge. Det kanske inte placeras rätt på den aktuella patchen.`)
};

const tr_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapı uzun zamandır güncellenmedi. Güncel yamada düzgün yerleşmeyebilir.`)
};

const zh_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此建筑已很久没有更新。在当前补丁中可能无法正确放置。`)
};

const ja_builds_banner_outdated_text = /** @type {(inputs: Builds_Banner_Outdated_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築は長いあいだ更新されていません。現在のパッチでは正しく配置できない場合があります。`)
};

/**
* | output |
* | --- |
* | "This build hasn’t been updated in a long time. It may not place correctly on the current patch." |
*
* @param {Builds_Banner_Outdated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_outdated_text = /** @type {((inputs?: Builds_Banner_Outdated_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Outdated_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_outdated_text(inputs)
	if (locale === "de") return de_builds_banner_outdated_text(inputs)
	if (locale === "fr") return fr_builds_banner_outdated_text(inputs)
	if (locale === "it") return it_builds_banner_outdated_text(inputs)
	if (locale === "nl") return nl_builds_banner_outdated_text(inputs)
	if (locale === "pl") return pl_builds_banner_outdated_text(inputs)
	if (locale === "pt") return pt_builds_banner_outdated_text(inputs)
	if (locale === "ru") return ru_builds_banner_outdated_text(inputs)
	if (locale === "sv") return sv_builds_banner_outdated_text(inputs)
	if (locale === "tr") return tr_builds_banner_outdated_text(inputs)
	if (locale === "zh") return zh_builds_banner_outdated_text(inputs)
	if (locale === "ja") return ja_builds_banner_outdated_text(inputs)
	return en_builds_banner_outdated_text(inputs)
});
