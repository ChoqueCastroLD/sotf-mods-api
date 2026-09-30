/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Autos_HintInputs */

const en_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Required by the items above. They follow the list: remove the item that needs them and they go too.`)
};

const es_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los necesitan los elementos de arriba. Siguen a la lista: si quitas el elemento que los requiere, se van con él.`)
};

const de_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Einträge oben brauchen sie. Sie folgen der Liste: Entfernst du den Eintrag, der sie braucht, verschwinden sie mit.`)
};

const fr_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requises par les éléments ci-dessus. Elles suivent la liste : retirez l’élément qui en a besoin et elles partent aussi.`)
};

const it_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste dagli elementi qui sopra. Seguono l’elenco: se rimuovi l’elemento che le richiede, spariscono anche loro.`)
};

const nl_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nodig voor de items hierboven. Ze volgen de lijst: verwijder het item dat ze nodig heeft en ze gaan mee.`)
};

const pl_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymagane przez elementy powyżej. Podążają za listą: usuń element, który ich wymaga, a znikną razem z nim.`)
};

const pt_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exigidas pelos itens acima. Elas acompanham a lista: remova o item que precisa delas e elas saem também.`)
};

const ru_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужны элементам выше. Они следуют за списком: уберите элемент, которому они нужны, и они исчезнут вместе с ним.`)
};

const sv_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krävs av objekten ovan. De följer listan: ta bort objektet som behöver dem så försvinner de också.`)
};

const tr_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yukarıdaki öğeler bunlara ihtiyaç duyuyor. Listeyi takip ederler: onlara ihtiyaç duyan öğeyi kaldırırsan onlar da gider.`)
};

const zh_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上方项目需要这些依赖。它们跟随列表变化：移除依赖它们的项目后，它们也会一并移除。`)
};

const ja_kits_autos_hint = /** @type {(inputs: Kits_Autos_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上のアイテムが必要とする MOD です。リストに連動し、必要とするアイテムを外すと一緒に外れます。`)
};

/**
* | output |
* | --- |
* | "Required by the items above. They follow the list: remove the item that needs them and they go too." |
*
* @param {Kits_Autos_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_autos_hint = /** @type {((inputs?: Kits_Autos_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Autos_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_autos_hint(inputs)
	if (locale === "de") return de_kits_autos_hint(inputs)
	if (locale === "fr") return fr_kits_autos_hint(inputs)
	if (locale === "it") return it_kits_autos_hint(inputs)
	if (locale === "nl") return nl_kits_autos_hint(inputs)
	if (locale === "pl") return pl_kits_autos_hint(inputs)
	if (locale === "pt") return pt_kits_autos_hint(inputs)
	if (locale === "ru") return ru_kits_autos_hint(inputs)
	if (locale === "sv") return sv_kits_autos_hint(inputs)
	if (locale === "tr") return tr_kits_autos_hint(inputs)
	if (locale === "zh") return zh_kits_autos_hint(inputs)
	if (locale === "ja") return ja_kits_autos_hint(inputs)
	return en_kits_autos_hint(inputs)
});
